import { Module } from '@nestjs/common';
import { StreetsService } from './streets.service';
import { StreetsController } from './streets.controller';
import { Street } from './entities/street.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Street])],
  controllers: [StreetsController],
  providers: [StreetsService],
})
export class StreetsModule {}
