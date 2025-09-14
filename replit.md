# Overview

This is a full-stack web application built with a modern React frontend and Express.js backend. The project uses a monorepo structure with shared TypeScript types and database schemas. It's configured as a REST API application with PostgreSQL database integration through Drizzle ORM, featuring a comprehensive UI component library based on shadcn/ui and Radix UI primitives.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in non-RSC mode
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: express-session with PostgreSQL session store (connect-pg-simple)
- **API Structure**: RESTful endpoints with `/api` prefix
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

## Data Storage
- **Primary Database**: PostgreSQL via Neon serverless driver
- **ORM**: Drizzle with migrations in `/migrations` directory
- **Schema Location**: Centralized in `/shared/schema.ts` for type sharing
- **Fallback Storage**: In-memory storage interface for development/testing

## Authentication & Authorization
- **Session-based Authentication**: Uses express-session middleware
- **User Schema**: Simple username/password model with UUID primary keys
- **Password Storage**: Plain text storage (requires hashing implementation)
- **Session Store**: PostgreSQL-backed session persistence

## Development & Build System
- **Monorepo Structure**: Client, server, and shared code separation
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Build Process**: Separate client (Vite) and server (esbuild) builds
- **Development Plugins**: Replit-specific development enhancements

## UI Component System
- **Base Library**: Radix UI primitives for accessibility
- **Theme System**: CSS custom properties with dark mode support
- **Component Variants**: class-variance-authority for component variations
- **Icons**: Lucide React icon library
- **Typography**: Custom font stack with Inter, Fira Code, and fallbacks

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting via `@neondatabase/serverless`
- **Connection**: Environment variable-based database URL configuration

## UI & Component Libraries
- **Radix UI**: Complete set of accessible component primitives
- **Embla Carousel**: Touch-friendly carousel component
- **cmdk**: Command palette and search functionality
- **react-day-picker**: Calendar and date picker components
- **input-otp**: OTP input component
- **vaul**: Drawer component library

## Development & Build Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side TypeScript compilation
- **Drizzle Kit**: Database schema management and migrations
- **PostCSS**: CSS processing with Tailwind and autoprefixer

## Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utilities
- **tailwind-merge**: Tailwind class deduplication

## Replit Integration
- **Development Plugins**: Cartographer, dev banner, and runtime error modal
- **Environment Detection**: Replit-specific feature toggles