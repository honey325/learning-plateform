import { AbstractEntity } from 'src/config/database/entity/abstract.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'role' })
export class role extends AbstractEntity<role> {
  @Column()
  roleType: string;

  @OneToMany(() => User, (user) => user.role)
  user: User[];
}
