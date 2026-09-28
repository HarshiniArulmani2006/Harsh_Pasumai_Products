// const express = require("express");
// const ProductRoute = require("./routes/productRoute")
// const dotenv = require("dotenv");
// const connectdb = require("./config/db");
// dotenv.config();
// connectdb();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api", ProductRoute);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.use("/api", require("./routes/productRoutes"));

// app.get("/", (req, res) => {
//   res.send("Pasumai Backend Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// console.log("Attempting to connect to MongoDB Atlas...");

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("✅ Database Connected Successfully"))
//   .catch(err => console.error("❌ DB Error:", err));

// app.use("/api", require("./routes/productRoute"));

// app.get("/", (req, res) => {
//   res.send("Pasumai Backend Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const authRoute = require("./routes/authRoute");
// const productRoutes = require("./routes/productRoute");

// const app = express(); // ✅ create app FIRST

// // middleware
// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/api/auth", authRoute);
// app.use("/api/products", productRoutes);

// // db connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("✅ Database Connected Successfully"))
//   .catch((err) => console.error("❌ DB Connection Error:", err));

// // server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ROUTES
// const productRoutes = require("./routes/productRoute");
// const authRoutes = require("./routes/authRoute");
// //const orderRoutes = require("./routes/orderRoute");
// const orderRoutes = require("./routes/orderRoute");
// const cartRoutes = require("./routes/cartRoute");
// app.use("/api", cartRoutes);

// app.use("/api", orderRoutes);

// app.use("/api", productRoutes);
// app.use("/api/auth", authRoutes);
// //app.use("/api", orderRoutes);

// // DB
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on port ${PORT}`)
// );
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ✅ ROUTES (MATCH FILE NAMES EXACTLY)
// const productRoutes = require("./routes/productRoute");
// const authRoutes = require("./routes/authRoute");
// const orderRoutes = require("./routes/orderRoute");
// const cartRoutes = require("./routes/cartRoute");

// // ✅ MOUNT ROUTES
// app.use("/api/products", productRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/cart", cartRoutes);

// // ✅ DB
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(5000, () =>
//       console.log("🚀 Server running on port 5000")
//     );
//   })
//   .catch((err) => console.log(err));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ROUTES
// const productRoutes = require("./routes/productRoute");
// const authRoutes = require("./routes/authRoute");

// app.use("/api/products", productRoutes);
// app.use("/api/auth", authRoutes);

// // DB
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(5000, () =>
//       console.log("🚀 Server running on port 5000")
//     );
//   })
//   .catch((err) => console.log("❌ DB Error:", err));

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoute");
const productRoutes = require("./routes/productRoute");
const cartRoutes = require("./routes/cartRoute");
const orderRoutes = require("./routes/orderRoute");
const contactRoutes = require("./routes/contactRoute");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

