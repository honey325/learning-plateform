import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { courseService } from '../sevices/course.service';
import { createCourseDto } from '../dto/coursecreate.dto';
import { updateCourseDto } from '../dto/courseupdate.dto';
import { stringObjectDto } from 'src/user/dto/usercreate.dto';

@ApiTags('course')
@Controller('course')
export class courseController {
  constructor(private courseService: courseService) {}

  @Get()
  findall() {
    return this.courseService.findAll({ deleteAt: null });
  }

  @Post('/content')
  @ApiConsumes('application/x-www-form-urlencoded')
  createContent(@Body() body: stringObjectDto) {
    const courseobj = body;

    return this.courseService.createcontent(
      {
        filename: courseobj.filename,
        originalName: courseobj.originalName,
        fileSize: Number(courseobj.fileSize),
        // courseId: Number(courseobj.courseId),
      },
      Number(courseobj.courseId),
    );
  }

  @Post()
  @ApiConsumes('application/x-www-form-urlencoded')
  createCourse(@Body() body: createCourseDto) {
    const obj = body;
    return this.courseService.create({
      name: obj.name,
      duration: obj.duration,
      courseDetail: obj.courseDetail,
      subscribePrice: Number(obj.subscribePrice),
      categoryId: Number(obj.categoryId),
    });
  }

  @Put()
  @ApiConsumes('application/x-www-form-urlencoded')
  updateCourse(@Body() body: updateCourseDto) {
    const updateobj = body;
    return this.courseService.update(
      {
        name: updateobj.name,
        duration: updateobj.duration,
        courseDetail: updateobj.courseDetail,
        subscribePrice: Number(updateobj.subscribePrice),
        categoryId: Number(updateobj.categoryId),
      },
      Number(updateobj.id),
    );
  }

  @Delete(':id')
  deletecourse(@Param('id') id: number) {
    return this.courseService.delete(id);
  }
}
