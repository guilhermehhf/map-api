import { Test, TestingModule } from '@nestjs/testing';
import { StreetsController } from './streets.controller';
import { StreetsService } from './streets.service';

describe('StreetsController', () => {
  let controller: StreetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetsController],
      providers: [StreetsService],
    }).compile();

    controller = module.get<StreetsController>(StreetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
