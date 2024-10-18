import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { course } from 'src/course/entities/course.entity';
// import { category } from 'src/courseCategory/entities/category.entity';
// import { videoMaster } from 'src/content/entities/videoMaster.entity';
import { role } from 'src/role/entities/role.entity';
import { category } from './entities/category.entity';
import { categoryService } from './services/category.service';
import { categoryController } from './controller/category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([category])],
  providers: [categoryService],
  exports: [categoryService],
  controllers: [categoryController],
})
export class categoryModule {}
