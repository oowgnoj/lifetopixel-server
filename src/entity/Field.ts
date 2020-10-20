import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ type: "timestamp", default: () => "NOW()" })
  registeredAt: Date;
}

export default Field;
