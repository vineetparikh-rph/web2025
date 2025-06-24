import fetch from 'node-fetch';

interface RefillFormData {
  rxNumber: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
  pickup?: string;
  deliveryInstructions?: string;
}

interface WinRxFormFields {
  requiredFields: string[];
  optionalFields: string[];
  pickupOptions: string[];
  formAction: string;
  csrfToken?: string;
}

export class WinRxScraper {
  private baseUrl: string;
  
  constructor(nabp: string) {
    this.baseUrl = `https://${nabp}.winrxrefill.com`;
  }

  /**
   * Scrape the refill form to understand required fields
   */
  async scrapeRefillForm(): Promise<WinRxFormFields> {
    try {
      const response = await fetch(this.baseUrl);
      const html = await response.text();
      
      // Extract form fields from HTML
      const requiredFields = this.extractRequiredFields(html);
      const optionalFields = this.extractOptionalFields(html);
      const pickupOptions = this.extractPickupOptions(html);
      const formAction = this.extractFormAction(html);
      const csrfToken = this.extractCSRFToken(html);
      
      return {
        requiredFields,
        optionalFields,
        pickupOptions,
        formAction,
        csrfToken
      };
    } catch (error) {
      console.error('Error scraping refill form:', error);
      throw new Error(`Failed to scrape refill form: ${error}`);
    }
  }

  /**
   * Extract required form fields from HTML
   */
  private extractRequiredFields(html: string): string[] {
    const requiredFields: string[] = [];
    
    // Look for required input fields
    const requiredInputRegex = /<input[^>]*required[^>]*name=['"](.*?)['"]/gi;
    let match;
    while ((match = requiredInputRegex.exec(html)) !== null) {
      requiredFields.push(match[1]);
    }
    
    // Also check for inputs with required attribute
    const requiredAttrRegex = /<input[^>]*name=['"](.*?)['"][^>]*required/gi;
    while ((match = requiredAttrRegex.exec(html)) !== null) {
      if (!requiredFields.includes(match[1])) {
        requiredFields.push(match[1]);
      }
    }
    
    return requiredFields;
  }

  /**
   * Extract optional form fields from HTML
   */
  private extractOptionalFields(html: string): string[] {
    const optionalFields: string[] = [];
    
    // Look for input fields that are not required
    const inputRegex = /<input[^>]*name=['"](.*?)['"]/gi;
    const requiredFields = this.extractRequiredFields(html);
    
    let match;
    while ((match = inputRegex.exec(html)) !== null) {
      const fieldName = match[1];
      if (!requiredFields.includes(fieldName) && !optionalFields.includes(fieldName)) {
        optionalFields.push(fieldName);
      }
    }
    
    return optionalFields;
  }

  /**
   * Extract pickup options from select elements
   */
  private extractPickupOptions(html: string): string[] {
    const pickupOptions: string[] = [];
    
    // Look for select element with pickup-related name
    const selectRegex = /<select[^>]*name=['"](pickup|delivery|method)['"'][^>]*>(.*?)<\/select>/gis;
    const match = selectRegex.exec(html);
    
    if (match && match[2]) {
      const optionsHtml = match[2];
      const optionRegex = /<option[^>]*value=['"](.*?)['"]/gi;
      let optionMatch;
      while ((optionMatch = optionRegex.exec(optionsHtml)) !== null) {
        pickupOptions.push(optionMatch[1]);
      }
    }
    
    return pickupOptions;
  }

  /**
   * Extract form action URL
   */
  private extractFormAction(html: string): string {
    const formRegex = /<form[^>]*action=['"](.*?)['"]/i;
    const match = formRegex.exec(html);
    return match ? match[1] : '/refill';
  }

  /**
   * Extract CSRF token if present
   */
  private extractCSRFToken(html: string): string | undefined {
    // Look for common CSRF token patterns
    const csrfPatterns = [
      /<input[^>]*name=['"](csrf|_token|authenticity_token)['"'][^>]*value=['"](.*?)['"]/i,
      /<meta[^>]*name=['"](csrf-token|_token)['"'][^>]*content=['"](.*?)['"]/i
    ];
    
    for (const pattern of csrfPatterns) {
      const match = pattern.exec(html);
      if (match && match[2]) {
        return match[2];
      }
    }
    
    return undefined;
  }

  /**
   * Submit refill request to WinRx portal
   */
  async submitRefillRequest(formData: RefillFormData): Promise<any> {
    try {
      // First scrape the form to get required fields and tokens
      const formInfo = await this.scrapeRefillForm();
      
      // Prepare form data
      const submitData = new URLSearchParams();
      submitData.append('rx_number', formData.rxNumber);
      submitData.append('last_name', formData.lastName);
      submitData.append('date_of_birth', formData.dateOfBirth);
      
      if (formData.phone) {
        submitData.append('phone', formData.phone);
      }
      
      if (formData.pickup) {
        submitData.append('pickup_method', formData.pickup);
      }
      
      if (formData.deliveryInstructions) {
        submitData.append('delivery_instructions', formData.deliveryInstructions);
      }
      
      // Add CSRF token if present
      if (formInfo.csrfToken) {
        submitData.append('_token', formInfo.csrfToken);
      }
      
      // Submit the form
      const submitUrl = formInfo.formAction.startsWith('http') 
        ? formInfo.formAction 
        : `${this.baseUrl}${formInfo.formAction}`;
        
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': this.baseUrl
        },
        body: submitData.toString()
      });
      
      const responseText = await response.text();
      
      return {
        success: response.ok,
        statusCode: response.status,
        response: responseText,
        formInfo
      };
    } catch (error) {
      console.error('Error submitting refill request:', error);
      throw new Error(`Failed to submit refill request: ${error}`);
    }
  }

  /**
   * Get form information without submitting
   */
  async getFormInfo(): Promise<WinRxFormFields> {
    return await this.scrapeRefillForm();
  }
}

// Create instances for all Georgies pharmacy locations
export const winRxScrapers = {
  'family': new WinRxScraper('3198098'),      // Georgies Family Pharmacy
  'specialty': new WinRxScraper('3155973'),   // Georgies Specialty Pharmacy  
  'parlin': new WinRxScraper('3151482'),      // Georgies Parlin Pharmacy
  'outpatient': new WinRxScraper('3156177')   // Georgies Outpatient Pharmacy
};