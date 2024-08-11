import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StreetsService } from './streets.service';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';

@Controller('streets')
export class StreetsController {
  constructor(private readonly streetsService: StreetsService) {}

  @Post()
  create(@Body() createStreetDto: CreateStreetDto) {
    return this.streetsService.create(createStreetDto);
  }

  @Get()
  findAll() {
    return this.streetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreetDto: UpdateStreetDto) {
    return this.streetsService.update(+id, updateStreetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streetsService.remove(+id);
  }
}
