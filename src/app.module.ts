import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { EventsModule } from './events/events.module';
import { StreetsModule } from './streets/streets.module';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { ShapefileModule } from './shapefile/shapefile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'map-db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'map',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CitiesModule, 
    NeighborhoodsModule, 
    StreetsModule, 
    EventsModule, 
    ShapefileModule, 
    UsersModule, 
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
