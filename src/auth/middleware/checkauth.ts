import { Injectable, NestMiddleware, Next, Req, Res } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { payloadDto } from '../dto/payload.dto';

@Injectable()
export class authmiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    try {
      const token: string = req.cookies?.token;

      const payload: payloadDto = jwt.verify(
        token,
        process.env.SECRET_KEY,
      ) as payloadDto;

      const result = await this.userService.findOne(payload.email);

      req['user'] = payload;

      return result
        ? next()
        : res.status(400).json({ msg: 'Please Login First' });
    } catch (error) {
      return res.status(400).json({ msg: 'Please Login First' });
    }
  }
}
