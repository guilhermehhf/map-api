import { PartialType } from '@nestjs/mapped-types';
import { CreateShapefileDto } from './create-shapefile.dto';

export class UpdateShapefileDto extends PartialType(CreateShapefileDto) {
  id: number;
}
