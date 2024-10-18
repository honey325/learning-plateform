import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import {
  UserCreateDto,
  stringNumObjectDto,
  stringObjectDto,
} from '../dto/usercreate.dto';
import { createCategoryDto } from 'src/courseCategory/dto/createCategory.dto';
import { UserUpdateDto } from '../dto/userupdate.dto';
import { Request } from 'express';
import { RequestWithUser, assertFunction } from 'src/auth/dto/auth.dto';
// import { userInterestDto } from '../dto/userinterest.dto';
// import { interestService } from '../services/interest.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    // private interestservice: interestService,
  ) {}

  @Get()
  findall(@Req() req: RequestWithUser) {
    try {
      if (req.user.role === 1) {
        return this.userService.findAll({ deleteAt: null });
      } else {
        return 'You are not authorized for this route';
      }
    } catch (err) {
      return err;
    }
  }

  @Post()
  @ApiConsumes('application/x-www-form-urlencoded')
  adduser(@Body() body: UserCreateDto) {
    const categories: number[] = [];
    for (let i = 0; i < Object.keys(body).length; i++) {
      if (body[`category${i}`] !== undefined) {
        categories.push(Number(body[`category${i}`]));
      }
    }
    return this.userService.addUser({
      name: body.name,
      email: body.email,
      contact: Number(body.contact),
      dob: new Date(body.dob),
      password: body.password,
      role: Number(body.role),
      // category: categories,
    });
  }

  @Post('/interest')
  @ApiConsumes('application/x-www-form-urlencoded')
  addInterest(@Body() body:stringObjectDto, @Req() req: RequestWithUser) {
    const userId = Number(req.user.role);
    const categories: number[] = [];
    for (let i = 0; i < Object.keys(body).length; i++) {
      if (body[`categoryId${i}`] !== undefined) {
        categories.push(Number(body[`categoryId${i}`]));
      }
    }
    const obj = { userId: userId, categoryId: categories };
    return this.userService.addInterest(obj);
  }

  @Put()
  @ApiConsumes('application/x-www-form-urlencoded')
  updateuser(@Body() body: UserUpdateDto) {
    return this.userService.updateUser(
      {
        name: body.name,
        email: body.email,
        contact: Number(body.contact),
        dob: new Date(body.dob),
        password: body.password,
      },
      Number(body.id),
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(Number(id));
  }
}
