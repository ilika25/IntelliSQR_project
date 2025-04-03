# 🛠 Backend - Node.js + Express + TypeScript

## 🚀 Overview
This is the backend of the application, built using **Node.js + Express + TypeScript**. It includes authentication using JWT and **Prisma ORM** for database management.

## 📌 Tech Stack
- **Node.js + TypeScript** – Server-side framework  
- **Express.js** – Web framework  
- **Prisma** – ORM for database management  
- **SQLite / MySQL** – Database options  
- **bcryptjs** – Password hashing  
- **JWT (JSON Web Token)** – Authentication  
- **Zod** – Input validation  
- **Dotenv** – Environment variable management  

---

## 🔹 Setup & Installation

### ✅ **Prerequisites**
Ensure you have the following installed:  
- **Node.js (>= 18.x)**  
- **npm or yarn**

### 🏗 **Steps to Run**
```sh
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Setup environment variables
echo "DATABASE_URL=file:./dev.db" > .env
echo "JWT_SECRET=your_secret_key" >> .env

# Run Prisma migration (Database Setup)
npx prisma migrate dev --name init

# Start the backend server
npm run dev
```
The The API will be available at http://localhost:5000.

## 🔹API EndPoints

### 🟢Login
  #### 🔹POST
  ```json
  {
  "email": "test@example.com",
  "password": "password123"
  }
 ```
  #### 🔹RESPONSE
  ```json
  {
  "token": "your_jwt_token"
  }
  ```

## 🔹Project Structure
```sh
backend/
│── src/
│   ├── controllers/   # Business logic for API
│   ├── routes/        # API endpoints
│   ├── middlewares/   # Authentication & validation
│   ├── prisma/        # Prisma schema & migrations
│   ├── utils/         # Helper functions
│   ├── server.ts      # Main server entry point
│── package.json       # Dependencies & scripts
│── tsconfig.json      # TypeScript configuration
│── prisma/schema.prisma # Database schema
```
## 🔹 Prisma Commands

| Command | Description |
|---------|-------------|
| `npx prisma migrate dev --name init` | Run database migrations |
| `npx prisma studio` | Open Prisma database UI |
| `npx prisma db seed` | Seed the database (**if you have a seed.ts file**) |
| `npx prisma generate` | Generate Prisma client |

