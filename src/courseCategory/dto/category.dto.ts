import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Column } from 'typeorm';
import { createCategoryDto } from './createCategory.dto';
import { course } from 'src/course/entities/course.entity';
import { category } from '../entities/category.entity';

export class categoryDto {
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  about: string;

  @ApiProperty()
  categories?: category[];

  @ApiProperty()
  @IsNumber()
  referTo?: number;

  course?: course[];
}
