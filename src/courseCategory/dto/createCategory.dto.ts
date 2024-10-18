import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { category } from '../entities/category.entity';

export class createCategoryDto {
  id?:number
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  about: string;

  @ApiProperty()
  @IsNumber()
  referTo?: number;

  category?: createCategoryDto[];
}
