 # Harsh's Pasumai Products

 Harsh's Pasumai Products is a full-stack ecommerce website for browsing and buying natural plants and products.

 The project includes:

 - React and Vite frontend
 - Node.js and Express backend
 - MongoDB database
 - User signup and login with JWT authentication
 - Product listing and product details
 - MongoDB-backed cart additions
 - Buy Now and cart checkout flows
 - MongoDB-backed order creation
 - Responsive layout for desktop and mobile screens

 ## Project Structure

 ```text
 my-app/
 |-- src/                         Frontend React application
 |-- public/                      Public frontend assets
 |-- ecom_pasumai_backend/
 |   |-- ecom-backend/            Express API and MongoDB integration
 |-- package.json                 Frontend scripts
 |-- vite.config.js
 |-- README.md
 ```

 ## Requirements

 Install these before running the project:

 - Node.js 18 or newer
 - npm
 - MongoDB Community Server for local development, or MongoDB Atlas for deployment
 - Git

 ## Clone the Repository

 ```powershell
 git clone https://github.com/HarshiniArulmani2006/Harsh_Pasumai_Products.git
 cd Harsh_Pasumai_Products/my-app
 ```

 ## Configure MongoDB

 The backend reads its configuration from:

 ```text
 ecom_pasumai_backend/ecom-backend/.env
 ```

 Create that file with the following values for local MongoDB:

 ```env
 PORT=5000
 MONGO_URL=mongodb://127.0.0.1:27017/ecom_pasumai_products
 JWT_SECRET=replace_with_a_long_random_secret
 ```

 The `.env` file is intentionally ignored by Git. Never commit passwords, database URLs, or JWT secrets.

 For MongoDB Atlas, replace `MONGO_URL` with your Atlas connection string and make sure the database user and network access rules are configured.

 ## Install Dependencies

 Install frontend dependencies:

 ```powershell
 cd my-app
 npm install
 ```

 Install backend dependencies:

 ```powershell
 cd ecom_pasumai_backend/ecom-backend
 npm install
 ```

 ## Run the Application Locally

 Open two terminal windows.

 ### Terminal 1: Backend

 ```powershell
 cd my-app/ecom_pasumai_backend/ecom-backend
 npm start
 ```

 The backend runs on:

 ```text
 http://localhost:5000
 ```

 ### Terminal 2: Frontend

 ```powershell
 cd my-app
 npm run dev
 ```

 Open the URL printed by Vite, usually:

 ```text
 http://localhost:5173
 ```

 ## Main API Endpoints

 | Method | Endpoint | Purpose |
 | --- | --- | --- |
 | GET | `/api/products` | Get all products |
 | GET | `/api/products/:id` | Get one product |
 | POST | `/api/auth/signup` | Create a user account |
 | POST | `/api/auth/login` | Log in and receive a JWT |
 | POST | `/api/cart` | Add a product to the logged-in user's cart |
 | GET | `/api/cart` | Get the logged-in user's cart |
 | POST | `/api/orders` | Place an authenticated order |

 Protected endpoints require this request header:

 ```text
 Authorization: Bearer YOUR_JWT_TOKEN
 ```

 ## Product Data

 Products are stored in:

 ```text
 Database: ecom_pasumai_products
 Collection: products
 ```

 A product should contain fields similar to:

 ```json
 {
	 "name": "Money Plant",
	 "category": "Plants",
	 "price": 129,
	 "image_url": "https://example.com/money-plant.jpg",
	 "description": "An attractive indoor plant that enhances greenery and decor."
 }
 ```

 ## Useful Commands

 Run the frontend production build:

 ```powershell
 cd my-app
 npm run build
 ```

 Run the frontend linter:

 ```powershell
 cd my-app
 npm run lint
 ```

 Run the frontend preview server after building:

 ```powershell
 cd my-app
 npm run preview
 ```

 ## Deployment

 The frontend and backend must be deployed separately.

 ### Backend

 Deploy `my-app/ecom_pasumai_backend/ecom-backend` to Render, Railway, or another Node.js host.

 Set these environment variables on the hosting platform:

 ```env
 PORT=5000
 MONGO_URL=your_mongodb_atlas_connection_string
 JWT_SECRET=your_secure_random_secret
 ```

 ### Frontend

 Deploy `my-app` to Vercel, Netlify, or another Vite-compatible host.

 Set this environment variable during frontend deployment:

 ```env
 VITE_API_URL=https://your-backend-domain.example.com
 ```

 The frontend uses `VITE_API_URL` to communicate with the deployed backend. A local URL such as `localhost:5000` works only on the development computer.

 ## Important Notes

 - Start MongoDB before starting the backend when using local MongoDB.
 - Start the backend before opening product, login, cart, or checkout pages.
 - Use MongoDB Atlas when the website must work from a mobile phone over the internet.
 - Do not commit `.env` files or expose database credentials in frontend code.
 - After changing frontend environment variables, restart the Vite server and rebuild the frontend.

 ## License

 This project is for educational and personal ecommerce development.
