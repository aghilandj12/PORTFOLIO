# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React/TypeScript frontend and Express.js backend. The application showcases Aghilan DJ's professional profile, including his education, skills, projects, achievements, and contact information. The site features an interactive AI-powered chat widget that answers questions about the portfolio owner's background and qualifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui design system
- **State Management**: React Query (TanStack Query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom theme provider with dark/light mode support and system preference detection

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Development**: Hot reloading with Vite integration for seamless development experience
- **Data Storage**: In-memory storage implementation with interface-based design for easy database migration
- **AI Integration**: OpenAI API integration for intelligent portfolio assistant functionality

### Component Structure
- **Modular Design**: Atomic design pattern with reusable UI components
- **Section-Based Layout**: Dedicated components for hero, education, skills, projects, achievements, and contact sections
- **Interactive Elements**: Smooth scrolling navigation, animated progress bars, and modal dialogs
- **Responsive Design**: Mobile-first approach with adaptive layouts across all screen sizes

### Database Design
- **Schema Management**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **User Management**: Basic user schema with authentication fields (currently using in-memory storage)
- **Migration System**: Drizzle Kit for database migrations and schema changes

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL session store configuration
- **Input Validation**: Zod schema validation for type-safe data handling
- **CORS Configuration**: Properly configured for development and production environments

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM for type-safe database interactions with Zod integration
- **AI Service**: OpenAI GPT-4o API for intelligent chat functionality
- **Session Store**: PostgreSQL-based session storage with connect-pg-simple

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: ESBuild for production bundling and TypeScript compilation
- **Development Environment**: Replit-specific plugins for enhanced development experience
- **Asset Management**: Font loading from Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### UI/UX Libraries
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Animation**: CSS transitions and transforms with intersection observer for scroll-triggered animations
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Hookform resolvers for validation
- **Date Utilities**: date-fns for date manipulation and formatting

### Styling & Design
- **CSS Framework**: Tailwind CSS with custom configuration and design tokens
- **Design System**: Class Variance Authority for component variants and styling consistency
- **Utility Functions**: clsx and tailwind-merge for conditional styling
- **PostCSS**: Autoprefixer for browser compatibility

### Additional Features
- **Image Carousel**: Embla Carousel for smooth image galleries
- **Command Palette**: CMDK for searchable command interfaces
- **Toast Notifications**: Custom toast system for user feedback
- **Progress Indicators**: Animated skill bars and loading states