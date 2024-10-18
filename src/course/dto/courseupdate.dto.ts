import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class updateCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id?: number;

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
}
