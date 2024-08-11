import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Polygon } from './entities/polygon.entity';
import { FeatureCollection } from 'geojson';

@Injectable()
export class ShapefileService {
  constructor(
    @InjectRepository(Polygon)
    private readonly polygonRepository: Repository<Polygon>,
  ) {}

  async processGeoJSON(geojson: FeatureCollection): Promise<void> {
    const polygons = geojson.features.map(feature => {
      const polygon = new Polygon();
      polygon.geometry = feature.geometry;
      polygon.name = feature.properties?.['Nome'] || 'Unnamed';
      return polygon;
    });

    await this.polygonRepository.save(polygons);
    
  }
}
