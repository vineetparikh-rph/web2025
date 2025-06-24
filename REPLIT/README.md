# Georgies Pharmacy Management System

A comprehensive pharmacy management web application built with React, Express, and TypeScript.

## Features

- **Patient Portal**: Prescription management, refill requests, transfers
- **Multi-Location Support**: 4 pharmacy locations with authentic information
- **Real-time Chat**: Patient-pharmacy communication system
- **WinRx Integration**: Direct integration with pharmacy systems
- **Health Tips**: AI-powered personalized health recommendations
- **Authentication**: Secure login with Replit Auth integration
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: OpenID Connect (Replit Auth)
- **Build Tool**: Vite
- **Deployment**: Ready for VPS, cloud platforms

## Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:5000
```

### Production
```bash
# Build application
npm run build

# Start production server
npm start
```

## Pharmacy Locations

1. **Georgies Family Pharmacy** - 332 W. St. Georges Ave, Linden, NJ
2. **Georgies Specialty Pharmacy** - 521 N Wood Ave, Linden, NJ  
3. **Georgies Parlin Pharmacy** - 499 Ernston Rd, Parlin, NJ
4. **Georgies Outpatient Pharmacy** - 6 Earlin Dr, Browns Mills, NJ

## Project Structure

```
├── client/           # React frontend application
├── server/          # Express backend server
├── shared/          # Shared types and database schema
├── components.json  # shadcn/ui configuration
├── package.json     # Dependencies and scripts
└── vite.config.ts   # Build configuration
```

## Key Features

### Animated Logo
Dynamic rotating logo showing all pharmacy locations between "Georgies" and "Pharmacy"

### Navigation
- Home, Locations (dropdown), Services, Refill, Create An Account, Contact

### Prescription Management
- View active prescriptions
- Request refills via multiple methods (WinRx portal, socket protocol)
- Transfer prescriptions between pharmacies
- Track prescription status

### Communication
- Live chat with pharmacy staff
- Contact forms with location-specific routing
- Emergency contact information

## Deployment

See `deployment-guide.md` for complete deployment instructions including:
- GitHub setup
- VPS/VM hosting
- Cloud platform deployment
- Domain and SSL configuration
- Database setup options

## Environment Variables

```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://...
SESSION_SECRET=your-secure-secret
REPL_ID=your-app-id
REPLIT_DOMAINS=yourdomain.com
```

## Authentication

Uses OpenID Connect with Replit as the identity provider. Supports automatic token refresh and secure session management.

## License

Private - Georgies Pharmacy Group

## Support

For technical support or questions about deployment, refer to the deployment guide or contact the development team.