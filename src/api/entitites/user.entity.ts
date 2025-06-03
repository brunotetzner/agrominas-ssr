import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "date" })
  bornAt: Date;

  @Column({ type: "date" })
  createdAt: Date;

  @Column()
  taxIdentifier: string;
}
