import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  /* modulos van aqui */
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name /* esto sale de extends document de Mongoose*/,
        schema: PokemonSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PokemonModule {}
