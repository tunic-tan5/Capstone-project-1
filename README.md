<h1 align="center">📝 Blog Application - Capstone Project</h1>

<p align="center">
A full-stack blog platform allowing users to read, author, and manage blog posts.
</p>

<p align="center">
The application features a distinct separation between Frontend and Backend, utilizing modern web technologies.
</p>

---

# 🚀 Features

### 🔐 Role-Based Access Control
- Separate portals and functionalities for Users, Authors, and Admins.

### 🔑 Authentication & Authorization
- Secure login and session management using JSON Web Tokens (JWT) and HTTP-only cookies.

### 🖼️ Image Uploads
- Integrated with Cloudinary for seamless media storage and management.

### ⚡ State Management
- Efficient frontend state handling using Zustand.

### 🎨 Responsive UI
- Modern, clean, and responsive design built with React 19 and Tailwind CSS v4.

---

# 🛠️ Tech Stack

## Frontend (/blog-app-frontend)

- Framework: React 19 built with Vite
- Styling: Tailwind CSS v4
- Routing: React Router v7
- State Management: Zustand
- Form Handling: React Hook Form
- HTTP Client: Axios
- Icons & Notifications: Lucide React, React Icons, React Hot Toast

---

## Backend (/blog-app-backend)

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT, bcryptjs, cookie-parser
- File Uploads: Multer, Cloudinary
- Environment: dotenv

---

# 📂 Project Structure

```bash
Capstone-Project/
├── blog-app-backend/       # Node.js/Express backend
│   ├── APIs/               # Route controllers (Admin, Author, User, Common)
│   ├── config/             # Database and cloud configurations
│   ├── middlewares/        # Custom middlewares (e.g., auth, error handling)
│   ├── models/             # Mongoose schemas
│   ├── services/           # Business logic
│   └── server.js           # Entry point for the backend
│
└── blog-app-frontend/      # React/Vite frontend
    ├── src/                # UI components, pages, and store
    ├── public/             # Static assets
    ├── vite.config.js      # Vite configuration
    └── package.json        # Frontend dependencies

⚙️ Local Setup & Installation
Prerequisites
Node.js installed on your machine.
MongoDB instance (local or Atlas cluster).
Cloudinary account for media storage.
1. Backend Setup
Navigate to the backend directory:
cd blog-app-backend
Install dependencies:
npm install
Create a .env file in the blog-app-backend folder with the necessary variables:
PORT=4000
DB_URL=your_mongodb_connection_string
# Add your JWT secrets and Cloudinary API credentials
Start the backend server:
npm start
2. Frontend Setup
Open a new terminal and navigate to the frontend directory:
cd blog-app-frontend
Install dependencies:
npm install
Start the Vite development server:
npm run dev
Open the provided local URL (usually http://localhost:5173) in your browser.
