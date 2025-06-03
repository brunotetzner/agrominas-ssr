import { Router, Request, Response } from "express";
import { DataSource } from "typeorm";
import { UserRepository } from "../repositories/user";
import { UserService } from "../services/user";

export function userController() {
  const router = Router();

  const userService = new UserService();

  router.post("/", async (req: Request, res: Response) => {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get("/", async (_req: Request, res: Response) => {
    const users = await userService.findAll();
    res.json(users);
  });

  router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.findOne(Number(id));
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user);
  });

  router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.update(Number(id), req.body);
      res.json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  });

  router.delete("/:codUsuario", async (req: Request, res: Response) => {
    const { codUsuario } = req.params;
    try {
      await userService.remove(codUsuario);
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  });

  return router;
}
