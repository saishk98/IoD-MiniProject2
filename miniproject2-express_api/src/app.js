import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

const swaggerDocument = JSON.parse(readFileSync(new URL("./swagger.json", import.meta.url)));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).send("Express API is running!");
});

export default app;
