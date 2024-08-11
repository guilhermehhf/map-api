import { Module } from '@nestjs/common';
import { ShapefileController } from './shapefile.controller';
import { ShapefileService } from './shapefile.service';
import { Polygon } from './entities/polygon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Polygon])],
  controllers: [ShapefileController],
  providers: [ShapefileService],
})
export class ShapefileModule {}
