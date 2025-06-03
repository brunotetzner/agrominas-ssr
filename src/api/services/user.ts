import { Repository } from "typeorm";
import { UserEntity } from "../entitites/user.entity";
import { AppDataSource } from "../common/data-source";

export class UserService {
  private userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const updated = Object.assign(user, data);
    return this.userRepository.save(updated);
  }

  async remove(codUsuario: string): Promise<void> {
    await this.userRepository.delete(codUsuario);
  }
}
