import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "portal/views"));

// Rota SSR
app.get("/", (req: Request, res: Response) => {
  res.render("portal");
});

// Inicia servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});
