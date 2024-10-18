import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmpty, IsNotEmpty } from 'class-validator';

export class authDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export type RequestWithUser = Request & { user: user };

export type user = {
  email: string;
  role: number;
};

export function assertFunction(req: Request): asserts req is RequestWithUser {
  if (!('user' in req)) {
    throw new Error('Request Does Not Contain User');
  }
}
