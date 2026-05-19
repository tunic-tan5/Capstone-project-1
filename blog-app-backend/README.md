# ⚙️ Blog Application Backend

Backend API for the Blog Application Capstone Project built using Node.js, Express.js, MongoDB, JWT, and Cloudinary.

---

# 🚀 Features

- RESTful API architecture
- JWT Authentication & Authorization
- Role-based access control
- Secure password hashing using bcryptjs
- HTTP-only cookie authentication
- Blog CRUD operations
- Cloudinary image uploads
- MongoDB database integration
- Error handling middleware

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- multer
- cloudinary
- dotenv

---

# 📂 Folder Structure

```bash
blog-app-backend/
│
├── APIs/                  # Route handlers/controllers
├── config/                # Database & Cloudinary config
├── middlewares/           # Custom middleware
├── models/                # Mongoose schemas
├── services/              # Business logic
├── server.js              # Entry point
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Navigate to Backend Folder

```bash
cd blog-app-backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create Environment File

Create a `.env` file inside the backend root directory.

```env
PORT=4000

DB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# ▶️ Run Backend Server

```bash
npm start
```

For development with nodemon:

```bash
npm run dev
```

---

# 🌐 Backend Runs On

```bash
http://localhost:4000
```

---

# 🔐 Authentication

Authentication includes:

- JWT Access Tokens
- Refresh Tokens
- HTTP-only Cookies
- Password hashing using bcryptjs

---

# 📸 Image Uploads

Image handling is implemented using:

- Multer
- Cloudinary

---

# 🗄️ Database

MongoDB is used for storing:

- Users
- Blog posts
- Roles
- Media references

---

# 📡 API Features

- User Authentication
- Author Blog Management
- Admin Controls
- Protected Routes
- CRUD Operations

---

# 👨‍💻 Author

Developed as part of a Full Stack Blog Application Capstone Project.
