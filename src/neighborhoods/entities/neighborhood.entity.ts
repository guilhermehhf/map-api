import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Geometry } from 'typeorm';
import { Polygon } from 'geojson';
import { City } from 'src/cities/entities/city.entity';

@Entity()
export class Neighborhood {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('geometry', { srid: 4326 })
  boundary: Geometry;

  @ManyToOne(() => City, (city) => city.neighborhoods)
  city: City;
}
