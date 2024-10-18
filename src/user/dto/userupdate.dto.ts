import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { createCategoryDto } from 'src/courseCategory/dto/createCategory.dto';

export class UserUpdateDto {
  @ApiProperty()
  @IsNumber()
  id?: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  contact?: number;

  @ApiProperty()
  role?: number;

  @ApiProperty()
  @IsDate()
  dob?: Date;

  @ApiProperty()
  password?: string;

  // categories?: createCategoryDto[];
}
