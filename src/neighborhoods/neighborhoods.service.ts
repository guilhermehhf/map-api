import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Neighborhood } from './entities/neighborhood.entity';
import { FeatureCollection, Polygon, Repository } from 'typeorm';
import { CitiesService } from 'src/cities/cities.service';

@Injectable()
export class NeighborhoodsService {
  constructor(
    @InjectRepository(Neighborhood)
    private readonly neighborhoodRepository: Repository<Neighborhood>,
    private readonly citiesService: CitiesService,
  ) {}

  create(neighborhood: Neighborhood) {
    return this.neighborhoodRepository.create(neighborhood);
  }

  async upload(geojson: FeatureCollection, cityId: number) : Promise<void>  {
    const city = await this.citiesService.findOne(cityId);
    
    if (!city) {
      throw new Error('City not found');
    }
  
    const neighborhoods = geojson.features.map(feature => {
      const neighborhood = new Neighborhood();
      neighborhood.boundary = feature.geometry as Polygon;
      neighborhood.name = feature.properties?.['Nome'] || 'Unnamed';
      neighborhood.city = city;
      return neighborhood;
    });

    await this.neighborhoodRepository.save(neighborhoods);
  }

  findAll() {
    return this.neighborhoodRepository.find();
  }

  async findOne(id: number) {
    const neighborhood = await this.neighborhoodRepository.findOneBy( { id } );
    return neighborhood;
  }

  update(id: number, updatedNeighborhood: Partial<Neighborhood>) {
    return this.neighborhoodRepository.update(id, updatedNeighborhood);
  }

  remove(id: number) {
    return this.neighborhoodRepository.delete(id);
  }
}
