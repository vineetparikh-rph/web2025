import * as net from 'net';

interface RefillSocketRequest {
  name: string;
  dob: string;
  phone: string;
  rxNumber: string;
  nabp: string;
  patientId?: number;
  pickupMethod?: string;
  notes?: string;
}

interface SocketResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export class PharmacySocketProtocol {
  private host: string = 's1.winrxrefill.com';
  private port: number = 569;
  private timeout: number = 10000; // 10 seconds

  constructor(host?: string, port?: number) {
    if (host) this.host = host;
    if (port) this.port = port;
  }

  /**
   * Format refill request into socket protocol message
   */
  private formatRefillMessage(request: RefillSocketRequest): string {
    const timestamp = new Date().toISOString();
    const message = [
      `NABP:${request.nabp}`,
      `NAME:${request.name}`,
      `DOB:${request.dob}`,
      `PHONE:${request.phone}`,
      `RX:${request.rxNumber}`,
      `TIMESTAMP:${timestamp}`,
      `PICKUP:${request.pickupMethod || 'IN_STORE'}`,
      `NOTES:${request.notes || ''}`,
      `PATIENT_ID:${request.patientId || ''}`
    ].join('|');
    
    return message;
  }

  /**
   * Parse response from socket server
   */
  private parseResponse(response: string): SocketResponse {
    try {
      // Check if response is JSON
      if (response.trim().startsWith('{')) {
        return JSON.parse(response);
      }
      
      // Parse pipe-delimited response
      const parts = response.split('|');
      const result: any = {};
      
      for (const part of parts) {
        const [key, value] = part.split(':');
        if (key && value) {
          result[key.toLowerCase()] = value;
        }
      }
      
      return {
        success: result.status === 'SUCCESS' || result.success === 'true',
        message: result.message || response,
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to parse response',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Submit refill request via socket connection
   */
  async submitRefillRequest(request: RefillSocketRequest): Promise<SocketResponse> {
    return new Promise((resolve) => {
      const socket = new net.Socket();
      let responseData = '';
      
      // Set timeout
      socket.setTimeout(this.timeout);
      
      socket.on('connect', () => {
        console.log(`Connected to ${this.host}:${this.port}`);
        const message = this.formatRefillMessage(request);
        console.log('Sending message:', message);
        socket.write(message);
      });
      
      socket.on('data', (data) => {
        responseData += data.toString();
      });
      
      socket.on('end', () => {
        console.log('Socket connection ended');
        const response = this.parseResponse(responseData);
        resolve(response);
      });
      
      socket.on('timeout', () => {
        console.log('Socket connection timed out');
        socket.destroy();
        resolve({
          success: false,
          message: 'Connection timeout',
          error: `Connection to ${this.host}:${this.port} timed out after ${this.timeout}ms`
        });
      });
      
      socket.on('error', (error) => {
        console.error('Socket error:', error);
        resolve({
          success: false,
          message: 'Connection error',
          error: error.message
        });
      });
      
      // Attempt connection
      try {
        socket.connect(this.port, this.host);
      } catch (error) {
        resolve({
          success: false,
          message: 'Failed to connect',
          error: error instanceof Error ? error.message : 'Unknown connection error'
        });
      }
    });
  }

  /**
   * Test connection to the socket server
   */
  async testConnection(): Promise<SocketResponse> {
    return new Promise((resolve) => {
      const socket = new net.Socket();
      
      socket.setTimeout(5000); // 5 second timeout for test
      
      socket.on('connect', () => {
        console.log(`Test connection to ${this.host}:${this.port} successful`);
        socket.end();
        resolve({
          success: true,
          message: 'Connection test successful'
        });
      });
      
      socket.on('timeout', () => {
        socket.destroy();
        resolve({
          success: false,
          message: 'Connection test timeout',
          error: `Cannot reach ${this.host}:${this.port}`
        });
      });
      
      socket.on('error', (error) => {
        resolve({
          success: false,
          message: 'Connection test failed',
          error: error.message
        });
      });
      
      try {
        socket.connect(this.port, this.host);
      } catch (error) {
        resolve({
          success: false,
          message: 'Connection test failed',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    });
  }

  /**
   * Submit multiple refill requests in batch
   */
  async submitBatchRefills(requests: RefillSocketRequest[]): Promise<SocketResponse[]> {
    const results: SocketResponse[] = [];
    
    for (const request of requests) {
      const result = await this.submitRefillRequest(request);
      results.push(result);
      
      // Add small delay between requests to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return results;
  }
}

export const socketProtocol = new PharmacySocketProtocol();