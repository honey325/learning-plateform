import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from './entities/course.entity';
import { category } from 'src/courseCategory/entities/category.entity';
import { courseController } from './controllers/course.controller';
import { courseService } from './sevices/course.service';
import { stremeSubcribe } from './entities/stremeSubcribe.entity';
import { courseContent } from './entities/coursecontent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([course, category, courseContent,stremeSubcribe])],
  providers: [courseService],
  exports: [courseService],
  controllers: [courseController],
})
export class courseModule {}
