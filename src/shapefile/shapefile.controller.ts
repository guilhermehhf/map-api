import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ShapefileService } from './shapefile.service';

@Controller('shapefile')
export class ShapefileController {
  constructor(private readonly shapefileService: ShapefileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadShapefile(@UploadedFile() file: { buffer: Buffer }): Promise<string> {
    const geojson = JSON.parse(file.buffer.toString());
    await this.shapefileService.processGeoJSON(geojson);
    return 'GeoJSON processed successfully!';
  }
}
