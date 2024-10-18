import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mysql',
        host: ConfigService.getOrThrow('DATABASE_HOST'),
        port: ConfigService.getOrThrow('DATABASE_PORT'),
        username: ConfigService.getOrThrow('DATABASE_USER'),
        password: ConfigService.getOrThrow('DATABASE_PASSWORD'),
        database: ConfigService.getOrThrow('DATABASE_DB'),
        entities: [__dirname + 'src/**/*.entity.ts'],
        migrations: [__dirname + 'src/config/database/migrations/**/*.ts'],
        autoLoadEntities: true,
        migrationsTableName: 'migration_table',
        // synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
