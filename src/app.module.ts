import { Module } from '@nestjs/common';
import { adminController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [adminController],
  providers: [AppService],
  imports: [
    CatsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'root',
      database:'test',
      models:[]
    })
  ],
})
export class AppModule {}
