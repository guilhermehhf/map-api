import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Neighborhood } from './entities/neighborhood.entity';

@Controller('neighborhoods')
export class NeighborhoodsController {
  constructor(private readonly neighborhoodsService: NeighborhoodsService) {}

  @Post()
  create(@Body() neighborhood: Neighborhood) {
    return this.neighborhoodsService.create(neighborhood);
  }

  @Post('upload/:city_id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadShapefile(
    @UploadedFile() file: { buffer: Buffer },
    @Param('city_id') cityId: number
  ): Promise<string> {
    const geojson = JSON.parse(file.buffer.toString());
    await this.neighborhoodsService.upload(geojson, cityId);
    return `Successfully uploaded shapefile for city with id ${cityId}`;
  }

  @Get()
  findAll() {
    return this.neighborhoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.neighborhoodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedNeighborhood: Partial<Neighborhood>) {
    return this.neighborhoodsService.update(+id, updatedNeighborhood);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.neighborhoodsService.remove(+id);
  }
}
