import { Module } from '@nestjs/common';
import { adminController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [adminController],
  providers: [AppService],
  imports: [CatsModule],
})
export class AppModule {}
