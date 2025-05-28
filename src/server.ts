import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "views/global")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/portal/index.html"));
});

app.get("/usuarios", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/user-list/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});
