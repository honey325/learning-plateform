import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class courseContentDto {
  @ApiProperty()
  @IsNotEmpty()
  filename: string;

  @ApiProperty()
  @IsNotEmpty()
  originalName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fileSize: number;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // courseId: number;
}
