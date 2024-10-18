import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { course } from 'src/course/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class category extends AbstractEntity<category> {
  @Column('varchar', { length: 255, unique: true })
  name: string;

  @Column('text')
  about: string;

  @OneToMany(() => category, (category) => category.id, { cascade: true })
  @JoinColumn({ name: 'referTo', referencedColumnName: 'id' })
  categories: category[];

  @OneToMany(() => course, (course) => course.category)
  course: course[];

  @ManyToMany(() => User, (user) => user.category, { cascade: true })
  user: User[];
}
