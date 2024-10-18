import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { UserCreateDto, stringNumObjectDto } from '../dto/usercreate.dto';
import { UserUpdateDto } from '../dto/userupdate.dto';
import { interestDto } from '../dto/interest.dto';
import { category } from 'src/courseCategory/entities/category.entity';
import { v4 as uuidv4 } from 'uuid';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<UserDto>,
  ) {}

  async findOne(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async findAll(condition: stringNumObjectDto) {
    return this.userRepository.find({
      where: condition,
      relations: { category: true },
    });
  }

  async addUser(user: UserCreateDto) {
    // return this.userRepository.insert(user);
    const salt = uuidv4();
    user.salt = salt;
    user.password = await argon2.hash(user.password + salt);
    return await this.userRepository.save(user);
  }

  async addInterest(obj: interestDto) {
    const user = await this.userRepository.findOne({
      where: { id: obj.userId },
      relations: { category: true },
    });
    user.category = obj.categoryId.map((id) => ({ id }) as category);
    return await this.userRepository.save(user);
  }

  async updateUser(user: UserUpdateDto, id: number) {
    return this.userRepository.update({ id: id }, user);
  }

  async deleteUser(id: number) {
    return this.userRepository.softDelete({ id: id });
  }
}
