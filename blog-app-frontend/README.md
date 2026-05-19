Blog App Frontend
Frontend for the Blog Application Capstone Project built using React 19, Vite, Tailwind CSS v4, Zustand, React Router v7, and modern frontend tools.

This frontend provides a complete user interface for a full stack blog platform, including authentication, dashboards, article management, comments, and profile customization.

---

Frontend Features

Authentication pages for secure login and registration

Role-based dashboards for different user types (User, Author, Admin)

Article creation, editing, and management UI

Comments system for blog interaction

Profile settings management

Theme switching support

Responsive modern UI design

Protected routes for secure navigation

Toast notifications for user feedback

Form validation using React Hook Form

Image upload support integrated with backend

---

Frontend Tech Stack

React 19

Vite

React Router v7

Tailwind CSS v4

Zustand (state management)

Axios (API communication)

React Hook Form (form handling)

React Hot Toast (notifications)

Lucide React & React Icons (UI icons)

---

Frontend Development Process

Created React application using Vite

Organized scalable folder structure

Configured routing using React Router v7

Built reusable UI components

Connected frontend with backend APIs using Axios

Implemented Zustand for global state management

Added JWT authentication handling

Implemented protected routes for security

Designed role-based dashboards:

User dashboard

Author dashboard

Admin dashboard

Integrated toast notifications for feedback

Implemented responsive design using Tailwind CSS

Added theme switching functionality

Configured deployment using Vercel

---

Folder Structure

blog-app-frontend/
│
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── AuthStore/         # Zustand state management
│   ├── pages/             # Application pages
│   ├── lib/               # Utility functions / API config
│   ├── styles/            # Styling files
│   ├── App.jsx
│   └── main.jsx
│
├── vite.config.js
├── package.json
└── README.md

---

Main Features

Responsive modern UI

Authentication system (JWT based)

Role-based access control

Protected routes

Article creation and editing system

Comment system

Theme switching support

Toast notifications

Session persistence

---

Frontend Pages

Home Page

Login Page

Register Page

User Dashboard

Author Dashboard

Admin Dashboard

Article Details Page

Profile Settings Page

---

API Connection

Axios is used for handling all API requests between frontend and backend.

Environment variable:

VITE_API_URL=http://localhost:4000

---

How To Run Frontend

Install dependencies:

npm install

Run development server:

npm run dev

Frontend runs on:

http://localhost:5173

---

Available Scripts

npm run dev
npm run build
npm run preview
npm run lint

---

UI Features

Clean and modern responsive design

Tailwind CSS utility-first styling

Reusable component architecture

Toast notifications for user actions

Protected navigation routes

Theme customization support

---

What I Learned

React component architecture and reusable design

State management using Zustand

Frontend routing and protected routes

API integration with backend

JWT authentication handling

Responsive UI development with Tailwind CSS

Deployment using Vercel

Real-world frontend project structure

---

Frontend Author Note

This frontend was built as part of a MERN stack learning project by a CSE undergraduate student to practice real-world frontend development concepts.
