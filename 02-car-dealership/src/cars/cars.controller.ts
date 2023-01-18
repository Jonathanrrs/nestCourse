/* controlador no maneja las reglas de negocio, no va la logica aqui */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe) ya no se usara aqui ni en el post porque lo vamos a utilizar a nivel aplicacion
export class CarsController {
  /* inyeccion de dependecias es en el constructor */
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllcars() {
    return this.carsService.findAll();
  }

  /* cualquier segmento que viene por el url es un string */
  /* tenia un pipe para transformar string a number, pero con uuid es string */
  /* pipe uuid para verificar que es uuid */
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return {
      car: this.carsService.findOneById(id),
    };
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
