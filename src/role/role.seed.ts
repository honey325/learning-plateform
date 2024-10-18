import { InjectRepository } from '@nestjs/typeorm';
import { role } from './entities/role.entity';
import { Repository } from 'typeorm';
// import { where } from 'sequelize';

export class roleSeed {
  constructor(
    @InjectRepository(role)
    private roleRepository: Repository<role>,
  ) {}

  async seeder() {
    const roles = ['admin', 'streamer', 'enduser'];
    const arr = [];
    roles.forEach((ele) => {
      if (this.roleRepository.find({ where: { roleType: ele } })) {
        arr.push(this.roleRepository.create({ roleType: ele }));
      }
    });
    return await this.roleRepository.insert(arr);
  }
  async delete() {
    const roles = ['admin', 'streamer', 'enduser'];
    const arr = [];
    roles.forEach((ele) => {
      if (this.roleRepository.find({ where: { roleType: ele } })) {
        arr.push(this.roleRepository.softDelete({ roleType: ele }));
      }
    });
    return await this.roleRepository.softDelete(arr);
  }
}
