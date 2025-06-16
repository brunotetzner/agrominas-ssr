import express, { Request, Response } from "express";
import path from "path";
import { userController } from "./api/controllers/user";
import { AppDataSource } from "./api/common/data-source";

const app = express();

// Servir toda a pasta views para acesso aos assets estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "views")));
app.use("/images", express.static(path.join(__dirname, "../images")));

app.use(express.json());
app.use("/usuarios", userController());

// Rotas que servem os arquivos HTML
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/portal/index.html"));
});

app.get("/view/usuarios", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/user-list/index.html"));
});

app.get("/view/dashboard", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/dashboard/index.html"));
});
async function main() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Data Source inicializado com sucesso!");

    const PORT = 3000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao inicializar o Data Source:", error);
  }
}

main();
