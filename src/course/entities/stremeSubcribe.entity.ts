import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { course } from './course.entity';

@Entity({ name: 'stremeSubcribe' })
export class stremeSubcribe {
  @PrimaryColumn('int')
  userId: number;

  @PrimaryColumn('int')
  courseId: number;

  @Column('tinyint', { default: false })
  isStreamer: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  users: User[];

  @ManyToOne(() => course)
  @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  courses: course[];
}
