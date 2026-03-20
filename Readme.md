# 🏌️ Golf Charity Platform

A full-stack web application that allows users to track golf scores, participate in draw systems, and contribute to charity through gameplay.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based login/signup)
* 📊 Score Management (stores last 5 scores)
* 🎯 Draw System (random number generator + winner logic)
* ❤️ Charity Contribution System
* 📱 Responsive UI (React)
* 🌐 Fully Functional REST API

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 📂 Project Structure

```
golf/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── index.html
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/golf-charity-platform.git
cd golf-charity-platform
```

### 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```
node server.js
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

* POST `/api/auth/signup`
* POST `/api/auth/login`
* GET `/api/user/profile`
* POST `/api/user/scores`
* POST `/api/draw/run`

---

## 🌐 Deployment

* Frontend: Vercel
* Backend: Render

---

## 👨‍💻 Author

Priyanshu Ahir

---

## 💡 Note

This project demonstrates full-stack development skills including authentication, API design, database integration, and frontend-backend communication.
