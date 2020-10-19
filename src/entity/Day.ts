import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import User from './User'

@Entity()
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goodThing: string;

  @Column()
  badThing: string;

  @Column()
  goalTomorrow: string;
  
  @Column()
  mainActivity: string;
  
  @Column()
  score: string;
  
  @ManyToOne(type => User, user => user.days)
  @JoinColumn()
  user: User;

  @Column({ type: 'timestamp' })
  registeredAt: Date;

}

export default Day;
