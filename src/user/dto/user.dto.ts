import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { category } from 'src/courseCategory/entities/category.entity';

export class UserDto {
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contact: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dob: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  role: number;

  salt?: string;
  // salt: string;
  @ApiProperty({ default: false })
  isDeleted: boolean;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  category?: category[];

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date | null;
}
