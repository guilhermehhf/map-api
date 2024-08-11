import { Test, TestingModule } from '@nestjs/testing';
import { ShapefileService } from './shapefile.service';

describe('ShapefileService', () => {
  let service: ShapefileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShapefileService],
    }).compile();

    service = module.get<ShapefileService>(ShapefileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
