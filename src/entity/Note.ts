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

  @Column()
  reference: string;

  @ManyToMany((type) => Tag)
  @JoinColumn()
  tags: Tag[];
  
  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ type: "timestamp", default: () => "NOW()"})
  registeredAt: Date;
}

export default Note;
