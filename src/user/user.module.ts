import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
// import { course } from 'src/course/entities/course.entity';
// import { category } from 'src/courseCategory/entities/category.entity';
// import { videoMaster } from 'src/content/entities/videoMaster.entity';
import { role } from 'src/role/entities/role.entity';
import { category } from 'src/courseCategory/entities/category.entity';
import { AuthController } from 'src/auth/controllers/auth.controller';
// import { interest } from './entities/interest.entity';
// import { interestService } from './services/interest.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, role, category])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
