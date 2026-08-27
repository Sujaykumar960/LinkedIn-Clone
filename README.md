# LinkedIn Clone (MERN Stack with WebSockets)

A full-stack, single-instance deployable LinkedIn Clone built using the MERN (MongoDB, Express, React, Node.js) stack, featuring real-time messaging, connections management, post creation with image uploads, and Google OAuth integration.

---

## 🚀 Key Features

* **Authentication**: Email/Password authentication alongside secure Google OAuth integration (Sign In with Google).
* **Feeds & Posts**: Dynamic homepage feed to view, create, like, and comment on posts. Media uploads are integrated via Cloudinary.
* **Connections Network**: Manage your professional network. Send, accept, ignore, or remove friend/connection requests.
* **Real-time Messaging**: Instant, direct messaging platform powered by WebSockets (Socket.io) with room-based chat windows.
* **Interactive Notifications**: Live notification updates when a user receives connection requests or post comments.
* **Profiles**: Interactive user profiles where users can manage their bio, experience details, profile photos, and banners.

---

## 🛠️ Tech Stack

### Frontend (Client)
* **Core**: React, Vite
* **Styling**: Tailwind CSS v4, Material UI (MUI Components & Icons)
* **Routing**: React Router DOM (v7)
* **HTTP Client**: Axios (configured with credentials and base URLs)
* **Real-time Socket**: Socket.io-client
* **OAuth**: `@react-oauth/google`

### Backend (Server)
* **Core**: Node.js, Express (v5)
* **Database**: MongoDB (configured via Mongoose ODM)
* **Real-time Engine**: Socket.io Server
* **Security & Tokens**: JWT (jsonwebtoken), bcryptjs, cookie-parser
* **OAuth**: `google-auth-library`

---

## 📁 Directory Structure

```text
LinkedIn-Clone/
├── linkedin-backend/        # Express server, Socket.io, & MongoDB configurations
│   ├── authentication/      # Auth middlewares
│   ├── controller/          # Route handlers & logic controllers
│   ├── models/              # Mongoose DB schemas
│   ├── routes/              # Express API endpoints
│   ├── connection.js        # MongoDB connection setup
│   ├── index.js             # Main server setup & WebSocket event listeners
│   └── package.json
│
├── linkedin-fronted/        # React + Vite application
│   ├── src/
│   │   ├── assets/          # Static assets & logos
│   │   ├── components/      # Reusable UI widgets (Post, Card, Navbar, Modals)
│   │   ├── pages/           # Page routes (Feeds, Login, Messages, Profile)
│   │   ├── api.js           # Centralized Axios API configuration
│   │   └── main.jsx         # App entry point & Google OAuth setup
│   ├── socket.js            # Socket client initialization
│   ├── vercel.json          # Vercel rewrite configuration for routing
│   └── package.json
│
├── package.json             # Root monorepo configuration (coordinates builds)
└── README.md
```

---

## ⚙️ Setup & Local Running

### Prerequisites
* [Node.js](https://nodejs.org/) installed locally.
* A running [MongoDB local instance](https://www.mongodb.com/try/download/community) (port `27017`) or a MongoDB Atlas URI.

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sujaykumar960/LinkedIn-Clone.git
   cd LinkedIn-Clone
   ```

2. **Install all dependencies & Build the Frontend**:
   From the root folder, run:
   ```bash
   npm run build
   ```
   *(This coordinates npm installs for both subfolders and builds the React app into `linkedin-fronted/dist`).*

3. **Configure Environment Variables**:
   Create a `config.env` file inside `linkedin-backend/` with the following variables:
   ```env
   PORT=4000
   JWT_SECRET_KEY=YourSecretKey
   JWT_PRIVATE_KEY=YourPrivateKey
   GOOGLE_CLIENT_ID=YourGoogleClientId
   ```
   Create a `.env` file inside `linkedin-fronted/` with:
   ```env
   VITE_GOOGLE_AUTH_KEY=YourGoogleClientId
   ```

4. **Start the Application**:
   From the root folder, start the backend server:
   ```bash
   npm start
   ```
   The backend will start on `http://localhost:4000`, and will serve the compiled React frontend statically. You can access the entire application by visiting `http://localhost:4000` in your browser.

---

## ☁️ Deployment Guide (Render)

This project is configured to run both frontend and backend under a single unified web service instance on **Render** (or Railway).

1. Create a new **Web Service** on Render.
2. Link your GitHub repository.
3. Keep the **Root Directory** field **blank** (important to run the root orchestrator scripts).
4. Configure the build parameters:
   * **Build Command**: `npm run build`
   * **Start Command**: `npm start`
5. Under **Environment Variables**, add:
   * `MONGODB_URI`: *Your MongoDB Atlas connection string*
   * `JWT_SECRET_KEY`: *Your JWT secret*
   * `JWT_PRIVATE_KEY`: *Your JWT secret*
   * `GOOGLE_CLIENT_ID`: *Your Google OAuth Client ID*
   * `VITE_GOOGLE_AUTH_KEY`: *Same Google Client ID (required for Vite frontend build)*
6. Click **Deploy Web Service**.
