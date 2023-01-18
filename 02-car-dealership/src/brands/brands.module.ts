import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  /* exponer para usar este servicio fuera de el */
  exports: [BrandsService],
})
export class BrandsModule {}
