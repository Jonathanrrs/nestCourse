import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

/* escuchar solicitudes y regresar respuestas, no va la logica de negocio, esto es el controlador */

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
