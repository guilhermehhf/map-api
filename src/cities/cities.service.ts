import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,

  ) {}
  create(city: City) {
    return this.cityRepository.save(city);
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findOneBy({ id });
  }

  update(id: number, updatedCity: Partial<City>) {
    return this.cityRepository.update(id, updatedCity);
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
