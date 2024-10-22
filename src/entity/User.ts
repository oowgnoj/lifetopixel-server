require("dotenv").config();
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  BeforeInsert,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { Day, Job, Field, Note, Tag } from "./index";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  userName: string;

  @OneToMany((type) => Day, (day) => day.user)
  days: Day[];

  @OneToMany((type) => Job, (job) => job.user)
  jobs: Job[];

  @OneToMany((type) => Field, (field) => field.user)
  fields: Field[];

  @OneToMany((type) => Note, (note) => note.user)
  notes: Note[];

  @OneToMany((type) => Tag, (tag) => tag.user)
  tags: Tag[];

  @Column({ type: "timestamp", default: () => "NOW()" })
  registeredAt: Date;

  @BeforeInsert()
  async hashpPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, process.env.KEY);
  }

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
  }
}

export default User;
