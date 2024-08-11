import { Test, TestingModule } from '@nestjs/testing';
import { ShapefileController } from './shapefile.controller';
import { ShapefileService } from './shapefile.service';

describe('ShapefileController', () => {
  let controller: ShapefileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShapefileController],
      providers: [ShapefileService],
    }).compile();

    controller = module.get<ShapefileController>(ShapefileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
