import { ApiProperty } from '@nestjs/swagger';

export class payloadDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  role: number;
}
