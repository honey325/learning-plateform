import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class createCourseDto {

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  duration: string;

  @ApiProperty()
  @IsNotEmpty()
  courseDetail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subscribePrice: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
  // categoryId
}
