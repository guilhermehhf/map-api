import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Geometry } from 'geojson';

@Entity('polygons')
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('geometry')
  geometry: Geometry;

  @Column()
  name: string;
}
