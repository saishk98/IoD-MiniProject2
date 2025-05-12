import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import cors from "cors";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

// Read `swagger.json` manually instead of importing it directly
const swaggerDocument = JSON.parse(readFileSync(new URL("./swagger.json", import.meta.url)));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" })); // ✅ Allow React to fetch API

// Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ensure API routes are properly mapped under `/api`
app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).send("Express API is running!");
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));

export default app;
