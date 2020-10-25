import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { User } from "./User";
import { Note } from "./Note";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @ManyToOne((type) => User, (user) => user.days)
  @JoinColumn()
  user: User;

  @ManyToMany((type) => Note)
  @JoinColumn()
  Notes: Note[];

  @Column({ type: "timestamp", default: () => "NOW()" })
  registeredAt: Date;
}

export default Tag;
