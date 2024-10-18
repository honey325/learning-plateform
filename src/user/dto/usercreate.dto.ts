import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { createCategoryDto } from 'src/courseCategory/dto/createCategory.dto';
import { category } from 'src/courseCategory/entities/category.entity';

export class UserCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  contact: number;

  @ApiProperty()
  @IsNotEmpty()
  role: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dob: Date;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  salt?: string;

  category?: category[];
}


export class stringNumObjectDto {
  [index: string]: string | number | boolean;
}

export class stringObjectDto {
  [index: string]: string;
}
