import express from "express";
import routes from "./routes/routes";
import productsRoutes from "./routes/products.routes";
import ErrorHandle from "./middlewares/ErrorHandle";
import path from "path";
const cors = require("cors");

const app = express();

app.use("/static", express.static(path.join(__dirname, "/media/")));
app.use(express.json());
app.use(cors());
app.use(productsRoutes);
app.use(routes);

app.use(ErrorHandle.handle);

export default app;
