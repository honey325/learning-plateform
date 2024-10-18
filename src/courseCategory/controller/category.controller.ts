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
import { categoryService } from '../services/category.service';
import { stringObjectDto } from 'src/user/dto/usercreate.dto';
import { createCategoryDto } from '../dto/createCategory.dto';

@ApiTags('category')
@Controller('category')
export class categoryController {
  constructor(private categoryService: categoryService) {}

  @Get()
  findall() {
    return this.categoryService.findAll({ deletedAt:null });
  }

  @Post()
  @ApiConsumes('application/x-www-form-urlencoded')
  addCategory(@Body() body: { [index: string]: string }) {
    const subcategories: createCategoryDto[] = [];

    for (let i = 0; i < Object.keys(body).length; i++) {
      if (body[`subcategory${i}`] !== undefined) {
        const obj = { name: body[`subcategory${i}`], about: body[`about${i}`] };
        subcategories.push(obj);
      }
    }
    return this.categoryService.create(
      { name: body.mainCategory, about: body.mainAbout },
      subcategories,
    );
  }

  @Put()
  @ApiConsumes('application/x-www-form-urlencoded')
  async updateCategory(@Body() body: stringObjectDto) {
    return await this.categoryService.update({
      id: Number(body.id),
      name: body.name,
      about: body.about,
    });
  }

  @Delete(':id')
  async deleteCategory(@Param() param: stringObjectDto) {
    return await this.categoryService.delete(Number(param.id));
  }
}
