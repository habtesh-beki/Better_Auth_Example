import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.listen(port, () => {
  console.log(`Better Auth app listening on port ${port}`);
});
