# 🌍 Full-Stack Application - React + Node.js + TypeScript

## 📌 Overview
This is a **full-stack web application** built using **React (frontend)** and **Node.js + Express (backend)** with **TypeScript**.  
It includes authentication and database management using Prisma ORM.

## 🚀 Tech Stack
- **Frontend**: React, TypeScript, Vite, React Hook Form, React Query, Zod, Axios  
- **Backend**: Node.js, Express, TypeScript, Prisma ORM, SQLite/MySQL, JWT, bcrypt  

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone <repo-url>
cd project-folder
```

### 2️⃣ Setup Frontend and Backend
#### Frontend
```sh
cd frontend
npm install
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
```
The frontend will run at http://localhost:5173

#### Backend
```sh
cd backend
npm install
echo "DATABASE_URL=file:./dev.db" > .env
echo "JWT_SECRET=your_secret_key" >> .env
npx prisma migrate dev --name init
npm run dev
```
The API will be available at http://localhost:5000

## 📜 Additional Documentation
- Frontend Docs: frontend/README.md
- Backend Docs: backend/README.md 
