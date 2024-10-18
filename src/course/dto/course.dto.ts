import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { category } from 'src/courseCategory/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { courseContentDto } from './addcontent.dto';

export class courseDto {
  @IsNumber()
  id: number;

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

  user?: User;
  category?: category;
  content?: courseContentDto[];
  // salt: string;
  @ApiProperty({ default: false })
  isDeleted: boolean;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date | null;
}
