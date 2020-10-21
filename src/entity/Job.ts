import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import User from './User'
import Note from './Note'

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  memo: string

  @OneToOne(type => Note)
  @JoinColumn()
  note: Note;
  
  @ManyToOne(type => User, user => user.id)
  @JoinColumn()
  user: User;

  @Column({ type: "timestamp", default: () => "NOW()"})
  registeredAt: Date;

}

export default Job;
