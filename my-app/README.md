# 🌿 Harsh's Pasumai Products

**Bringing Nature's Purity to Your Home**

Harsh's Pasumai Products is a full-stack e-commerce platform designed to help users explore and purchase natural plants, organic products, and eco-friendly essentials. The application provides a seamless shopping experience with secure authentication, product browsing, cart management, and order processing.

---

#  Project Overview

The platform enables users to:

✅ Create and manage accounts securely

✅ Browse a variety of plants and natural products

✅ View detailed product information

✅ Add products to a personalized shopping cart

✅ Place orders through a smooth checkout process

✅ Access the website across desktop and mobile devices

The application follows a modern full-stack architecture using React, Node.js, Express, and MongoDB.

---

#  Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas (Cloud Deployment)

### Authentication & Security

* JSON Web Token (JWT)
* Password Hashing

### Development Tools

* Git & GitHub
* npm
* Postman
* VS Code

---

#  Key Features

### 👤 User Authentication

* User Registration
* Secure Login System
* JWT-Based Authentication
* Protected Routes

### 🌱 Product Management

* View All Products
* Product Details Page
* Category-Based Products
* Dynamic Product Rendering from MongoDB

### 🛒 Shopping Cart

* Add to Cart
* View Cart Items
* MongoDB Cart Storage
* User-Specific Cart Management

### 📦 Order Management

* Buy Now Functionality
* Checkout Process
* Order Creation and Storage
* Order Tracking Support Structure

### 📱 Responsive Design

* Mobile Friendly
* Tablet Compatible
* Desktop Optimized

---

# 🏗️ System Architecture

```text
Frontend (React + Vite)
           │
           ▼
Backend API (Node.js + Express)
           │
           ▼
MongoDB Database
```

The frontend communicates with the backend through REST APIs, while MongoDB stores users, products, carts, and order information.

---

# 📂 Project Structure

```text
my-app/
│
├── src/                             React Frontend
├── public/                          Public Assets
│
├── ecom_pasumai_backend/
│   └── ecom-backend/
│       ├── routes/
│       ├── models/
│       ├── middleware/
│       ├── controllers/
│       ├── server.js
│       └── .env
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🔐 Authentication Flow

```text
User Login
     │
     ▼
Backend Verification
     │
     ▼
JWT Token Generated
     │
     ▼
Protected API Access
```

All protected APIs require:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 🗄️ Database Collections

### Users

Stores registered user information.

### Products

Stores plant and product details.

### Cart

Stores user cart items.

### Orders

Stores purchase and checkout information.

---

# 📌 Sample Product Document

```json
{
  "name": "Money Plant",
  "category": "Plants",
  "price": 129,
  "image_url": "https://example.com/money-plant.jpg",
  "description": "An attractive indoor plant that enhances greenery and decor."
}
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/HarshiniArulmani2006/Harsh_Pasumai_Products.git
```

---

## Frontend Setup

```bash
cd my-app
npm install
npm run dev
```

---

## Backend Setup

```bash
cd ecom_pasumai_backend/ecom-backend
npm install
npm start
```

---

## MongoDB Configuration

Create a `.env` file:

```env
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/ecom_pasumai_products
JWT_SECRET=your_secure_secret_key
```

---

# 🔗 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | /api/products     | Fetch all products    |
| GET    | /api/products/:id | Fetch product details |
| POST   | /api/auth/signup  | Register user         |
| POST   | /api/auth/login   | Login user            |
| POST   | /api/cart         | Add product to cart   |
| GET    | /api/cart         | Get user cart         |
| POST   | /api/orders       | Create new order      |

---

# ☁️ Deployment

### Backend Deployment

* Render
* Railway
* Node.js Hosting Platforms

### Frontend Deployment

* Vercel
* Netlify
* Vite-Compatible Hosting

### Environment Variables

```env
PORT=5000
MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_secret
VITE_API_URL=https://your-backend-domain.com
```

---

#  Project Highlights

* Full Stack MERN-Based Application
* JWT Authentication
* MongoDB Integration
* REST API Architecture
* Responsive User Interface
* Cart & Order Management
* Cloud Deployment Ready
* Scalable E-commerce Design

---

# 🌿 Vision

Harsh's Pasumai Products aims to promote sustainable living by making natural plants and eco-friendly products easily accessible through a modern digital platform.

**"Bringing Nature's Purity to Your Home."**
