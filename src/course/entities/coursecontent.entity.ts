import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { course } from 'src/course/entities/course.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('courseContent')
export class courseContent extends AbstractEntity<courseContent> {
  @Column('varchar', { length: 225 })
  filename: string;

  @Column('varchar', { length: 225 })
  originalName: string;

  @Column('int')
  fileSize: number;

  @ManyToOne(() => course, (course) => course.content)
  @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  course: course;
}
