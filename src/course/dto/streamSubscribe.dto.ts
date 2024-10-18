import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class streamSubDto {
  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNumber()
  courseId: number;

  @ApiProperty({default:false})
  @IsBoolean()
  isStreamer:boolean
}
