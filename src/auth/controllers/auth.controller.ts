import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { authDto } from '../dto/auth.dto';
import { UserService } from 'src/user/services/user.service';
import * as argon2 from 'argon2';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  async loginPage(@Body() user: authDto, @Res() res: Response) {
    const { email, password } = user;
    const result = await this.userService.findOne(email);

    const token = jwt.sign(
      { email: email, roleId: result.role },
      process.env.SECRET_KEY,
    );

    if (await argon2.verify(result.password, password + result.salt)) {
      return res
        .cookie('token', token)
        .json({ msg: 'User Logged In Successful' });
    } else {
      return res.json({ msg: 'Invalid Credentials' });
    }
  }
}
