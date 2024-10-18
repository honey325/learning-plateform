import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringNumObjectDto } from 'src/user/dto/usercreate.dto';
import { Repository } from 'typeorm';
import { category } from '../entities/category.entity';
import { categoryDto } from '../dto/category.dto';
import { createCategoryDto } from '../dto/createCategory.dto';

@Injectable()
export class categoryService {
  constructor(
    @InjectRepository(category)
    private categoryRepository: Repository<categoryDto>,
  ) {}

  findAll(condition: stringNumObjectDto) {
    return this.categoryRepository.find({
      where: condition,
      relations: {  course: true },
    });
  }

  async create(obj: createCategoryDto, subcategories: createCategoryDto[]) {
    const categorys: any = obj;
    categorys.categories = subcategories;
    return await this.categoryRepository.save(categorys);
  }

  async update(obj: createCategoryDto) {
    return await this.categoryRepository.update({ id: obj.id }, obj);
  }
  async delete(id: number) {
    return await this.categoryRepository.softDelete({ id: id });
  }
}
