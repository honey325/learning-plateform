import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringNumObjectDto } from 'src/user/dto/usercreate.dto';
import { Repository } from 'typeorm';
import { course } from '../entities/course.entity';
import { courseDto } from '../dto/course.dto';
import { createCourseDto } from '../dto/coursecreate.dto';
import { courseContentDto } from '../dto/addcontent.dto';
import { category } from 'src/courseCategory/entities/category.entity';

@Injectable()
export class courseService {
  constructor(
    @InjectRepository(course)
    private courseRepository: Repository<courseDto>,
  ) {}

  findAll(condition: stringNumObjectDto) {
    return this.courseRepository.find({
      where: condition,
      relations: { content: true },
    });
  }

  async createcontent(obj: courseContentDto, courseId: number) {
    try {
      const course = await this.courseRepository.findOne({
        where: { id: courseId },
        relations: { content: true },
      });

      course.content.push(obj);
      return await this.courseRepository.save(course);
    } catch (err: string | Error | unknown) {
      throw err;
    }
  }

  async create(obj: createCourseDto) {
    return await this.courseRepository.insert({
      name: obj.name,
      duration: obj.duration,
      courseDetail: obj.courseDetail,
      subscribePrice: obj.subscribePrice,
      category: { id: obj.categoryId } as category,
    });
  }

  async update(obj: createCourseDto, id: number) {
    return await this.courseRepository.update({ id: id }, obj);
  }

  async delete(id: number) {
    return await this.courseRepository.softDelete({ id: id });
  }
}
