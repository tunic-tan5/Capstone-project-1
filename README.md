 # Full Stack Blog Application

A modern full-stack MERN blog platform developed as part of my web development learning journey.

This application allows users to read, create, manage, and moderate blog articles through role-based access control with secure authentication and responsive UI design.

The project follows a clear separation between Frontend and Backend using modern web technologies and industry-standard practices.

---

# Features

## Role-Based Access Control

Separate functionalities and dashboards for:

- Users
- Authors
- Admins

---

## Authentication & Authorization

Secure authentication system using:

- JSON Web Tokens (JWT)
- HTTP-only Cookies
- Protected Routes
- Session Persistence

---

## Article Management

Authors can:

- Create articles
- Edit articles
- Soft delete articles
- Manage their own content

Users can:

- Read articles
- Comment on articles

Admins can:

- Moderate users
- Manage articles
- Access admin APIs

---

## Media Uploads

Integrated Cloudinary support for image uploads and storage.

---

## State Management

Efficient frontend state handling using Zustand.

---

## Responsive UI

Modern, responsive, and clean user interface built using React 19 and Tailwind CSS.

---

# Tech Stack

## Frontend (/frontend)

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Zustand
- Axios
- React Hook Form
- React Hot Toast

---

## Backend (/backend)

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- cookie-parser
- CORS
- dotenv
- multer
- Cloudinary

---

# Repository Structure

```bash
project-root/
├── backend/
│   ├── APIs/
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── services/
│   ├── req.http
│   ├── server.js
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── stores/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── README.md
│
├── vercel.json
└── README.md
```

---

# Local Setup & Installation

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB Atlas or local MongoDB setup
- Cloudinary account for media uploads

---

# Backend Setup

## Navigate to Backend Directory

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

## Create `.env` File

Create a `.env` file inside the backend folder and add:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Start Backend Server

```bash
npm start
```

---

# Frontend Setup

## Navigate to Frontend Directory

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Open in Browser

```
http://localhost:5173
```

---

# APIs Used

| API       | Purpose |
|-----------|----------|
| UserAPI   | User registration, reading articles, comments |
| AuthorAPI | Author registration and article management |
| AdminAPI  | Admin moderation APIs |
| CommonAPI | Login, logout, auth check, profile settings |

---

# Deployment

- Frontend deployed using Vercel
- Backend deployed using Render
- MongoDB Atlas used for database hosting

---

# What I Learned From This Project

- Building full-stack MERN applications
- REST API development
- Authentication and authorization
- MongoDB schema design
- State management using Zustand
- Secure cookie handling
- Cloudinary media uploads
- Frontend and backend integration
- Deployment workflow
- Real-world project structuring

---

# Author

Developed as a MERN Stack learning project by a CSE undergraduate student.
