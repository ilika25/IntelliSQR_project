# Frontend - React + TypeScript

## Overview
This is the frontend of the application, built using **React + TypeScript** and follows a modular structure with reusable components.

## Tech Stack
- **React + TypeScript** (Component-based UI framework)
- **Vite** (Fast build tool)
- **React Hook Form** (Form handling)
- **React Query** (Data fetching & state management)
- **Zod** (Validation)
- **Axios** (API Requests)

## Setup & Installation

### Prerequisites
- Node.js (>= 18.x)
- npm or yarn

### Steps to Run
```sh
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Setup environment variables
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start the frontend server
npm run dev

```
## Project Structure
```sh
frontend/
│── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Validation & helper functions
│   ├── api/          # API requests
│   ├── styles/       # Styling
│   ├── App.tsx       # Main entry point
│── package.json      # Dependencies & scripts
│── tsconfig.json     # TypeScript configuration
│── vite.config.ts    # Vite configuration
```
