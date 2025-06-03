import express, { Request, Response } from "express";
import path from "path";
import { userController } from "./api/controllers/user";
import { AppDataSource } from "./api/common/data-source";

const app = express();

app.use(express.static(path.join(__dirname, "views/global")));
app.use(express.json());
app.use("/usuarios", userController());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/portal/index.html"));
});

app.get("/usuarioss", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views/user-list/index.html"));
});

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("✅ Data Source inicializado com sucesso!");

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao inicializar o Data Source:", error);
  }
}

main();
