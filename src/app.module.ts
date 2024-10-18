import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { courseModule } from './course/course.module';
import { categoryModule } from './courseCategory/category.module';
import { authmiddleware } from './auth/middleware/checkauth';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    UserModule,
    courseModule,
    categoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authmiddleware)
      .forRoutes(
        { path: 'category', method: RequestMethod.ALL },
        { path: 'course', method: RequestMethod.ALL },
        { path: 'user', method: RequestMethod.PUT },
        { path: 'user', method: RequestMethod.GET },
        { path: 'user', method: RequestMethod.DELETE },
      );
  }
}
