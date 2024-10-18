import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @ApiTags('Demo')
  @Get()
  @ApiOkResponse({
    description: 'This is First Route',
  })
  getHello(): string {
    console.log(123123);
    return this.appService.getHello();
  }
}
