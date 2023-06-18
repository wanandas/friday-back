import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exp')
export class Exp {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  position: string;

  @Column()
  joinDate: Date;

  @Column({
    nullable: true,
  })
  leaveDate: Date;

  @Column()
  companyName: string;

  @Column('varchar', { array: true, default: [] })
  description: string[];

  @Column('varchar', { array: true, default: [] })
  technologies: string[];
}
