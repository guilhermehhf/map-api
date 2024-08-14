import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Geometry, AfterLoad, ViewColumn } from 'typeorm';
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

  
  bbox?: number[];

  @ManyToOne(() => City, (city) => city.neighborhoods)
  city: City;

  @AfterLoad()
  calculateBBox() {
    if (this.boundary && this.boundary.type === 'MultiPolygon') {
      const coordinates = this.boundary.coordinates.flat(2);
      const lats = coordinates.map(coord => coord[1]);
      const lons = coordinates.map(coord => coord[0]);

      this.bbox = [
        Math.min(...lons),
        Math.min(...lats),
        Math.max(...lons),
        Math.max(...lats),
      ];
    }
  }
}
