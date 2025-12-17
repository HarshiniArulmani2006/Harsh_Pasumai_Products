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

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const productAPI = {
  getAllProducts: async () => {
    const response = await api.get("/getproduct"); 
    return response.data; //  ARRAY
  },

  getProductById: async (id) => {
    const response = await api.get(`/getproduct/${id}`);
    return response.data;
  },
};

export default api;
