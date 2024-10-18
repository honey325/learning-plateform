import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { category } from 'src/courseCategory/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { courseContent } from './coursecontent.entity';

@Entity()
export class course extends AbstractEntity<course> {
  @Column('varchar', { length: 225 })
  name: string;

  @Column('varchar', { length: 225 })
  duration: string;

  @Column('text')
  courseDetail: string;

  @Column('int')
  subscribePrice: number;

  @OneToMany(() => courseContent, (courseContent) => courseContent.course, {
    cascade: true,
  })
  content: courseContent[];

  @ManyToMany(() => User, (user) => user.course)
  user: User[];

  @ManyToOne(() => category, (category) => category.course, { cascade: true })
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
  category: category;
}
