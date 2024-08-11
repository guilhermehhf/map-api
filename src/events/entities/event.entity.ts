import { Entity, PrimaryGeneratedColumn, Column, Point } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4326 })
  location: Point;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  date: Date;
}
