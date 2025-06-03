import { AppDataSource } from "../common/data-source";
import { UserEntity } from "../entitites/user.entity";
import { Repository } from "typeorm";

export class UserRepository {
  private static instance: Repository<UserEntity>;

  static async getInstance(): Promise<Repository<UserEntity>> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    if (!this.instance) {
      this.instance = AppDataSource.getRepository(UserEntity);
    }

    return this.instance;
  }
}
