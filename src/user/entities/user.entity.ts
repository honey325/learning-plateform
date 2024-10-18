import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { course } from 'src/course/entities/course.entity';
import { category } from 'src/courseCategory/entities/category.entity';
import { role } from 'src/role/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column({ type: 'bigint' })
  contact: number;

  @Column('datetime')
  dob: Date;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('varchar', { nullable: false })
  salt: string;

  @ManyToOne(() => role, (role) => role.user)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  role: role;

  @ManyToMany(() => course, (course) => course.user, { cascade: true })
  @JoinTable({ name: 'stremeSubcribe' })
  course: course[];

  @ManyToMany(() => category, (category) => category.user)
  @JoinTable({
    name: 'interest',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categoryId',
      referencedColumnName: 'id',
    },
  })
  category: category[];
}
