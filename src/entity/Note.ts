import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";
import Field from "./Field";

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

  @ManyToMany((type) => Tag, (tag) => tag.notes, { eager: true })
  @JoinTable()
  tags: Tag[];

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne((type) => Field, (field) => field.id)
  @JoinColumn()
  field: number;

  @Column({ type: "timestamp", default: () => "NOW()" })
  registeredAt: Date;
}

export default Note;
