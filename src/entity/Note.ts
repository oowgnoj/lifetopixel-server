import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column()
  detail: string;

  @ManyToMany((type) => Tag)
  @JoinColumn()
  tags: Tag[];

  @Column()
  reference: string;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ type: "timestamp" })
  registeredAt: Date;
}

export default Note;
