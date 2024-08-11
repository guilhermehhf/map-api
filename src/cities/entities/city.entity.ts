import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Geometry } from 'typeorm';
import { Polygon } from 'geojson';
import { Neighborhood } from 'src/neighborhoods/entities/neighborhood.entity';
import { Street } from 'src/streets/entities/street.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('geometry', { srid: 4326 })
  boundary: Geometry;

  @OneToMany(() => Neighborhood, (neighborhood) => neighborhood.city)
  neighborhoods: Neighborhood[];

  @OneToMany(() => Street, (street) => street.city)
  streets: Street[];
}
