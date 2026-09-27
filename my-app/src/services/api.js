// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const productAPI = {
//   getAllProducts: async () => {
//     const res = await api.get("/getproduct");
//     return res.data;   // 👈 IMPORTANT
//   },
// };

// export default api;
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const productAPI = {
//   getAllProducts: async () => {
//     const response = await api.get("/products"); 
//     return response.data; 
//   },
// };

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const productAPI = {
//   getAllProducts: async () => {
//     const response = await api.get("/getproduct"); 
//     return response.data; //  ARRAY
//   },

//   getProductById: async (id) => {
//     const response = await api.get(`/getproduct/${id}`);
//     return response.data;
//   },
// };

// export default api;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", // change if needed
// });

// export const getProducts = () => API.get("/products");
// export const getProductById = (id) => API.get(`/products/${id}`);

// export const createOrder = (orderData) =>
//   API.post("/orders", orderData);

// export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const getProducts = () => API.get("/products");
// export const getProductById = (id) => API.get(`/products/${id}`);
// export const createOrder = (orderData) => API.post("/orders", orderData);

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api`,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// PRODUCTS
export const getProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);

// ORDERS
export const createOrder = (orderData) =>
  API.post("/orders", orderData);

export const signup = (userData) => API.post("/auth/signup", userData);
export const login = (credentials) => API.post("/auth/login", credentials);
export const addToCart = (productId, qty = 1) => API.post("/cart", { productId, qty });

export default API;



