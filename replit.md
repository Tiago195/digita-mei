# Digitamei Project

## Overview

This is a multi-app monorepo for Digitamei, a Brazilian link-in-bio and business management SaaS platform.

## Project Structure

```
/
├── landing/          # Main landing page (React + Vite + Tailwind CSS v4)
├── fastlink/         # Hero editor tool (React + Vite + Leva controls)
└── api/              # Spring Boot Java REST API (MySQL backend)
```

## Apps

### landing (Primary Frontend)
- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 with shadcn/ui components
- Framer Motion animations
- Wouter for routing
- Runs on port 5000
- Command: `cd landing && bun run dev`

### fastlink
- React 19 + TypeScript + Vite
- Leva for live UI controls/customization
- Companion tool to the landing page hero section editor

### api (Java Backend)
- Spring Boot 3.2.5
- Java 17
- JPA + MySQL
- Requires MySQL at localhost:3306/digitamei

## Development

Start the landing page:
```
cd landing && bun run dev
```

## Workflow

- **Start application**: `cd landing && bun run dev` (port 5000, webview)

## Deployment

- Target: Static site
- Build: `cd landing && bun run build`
- Public dir: `landing/dist`
