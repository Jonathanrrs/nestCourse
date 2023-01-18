import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}
  /* una dependencia de mi servicio */

  // async executeSeed() {
  //   await this.pokemonModel.deleteMany({});
  //   const { data } = await this.axios.get<PokeResponse>(
  //     'https://pokeapi.co/api/v2/pokemon?limit=10',
  //   );

  //   const inserPromisesArray = [];

  //   data.results.forEach(({ name, url }) => {
  //     const segments = url.split('/');
  //     /* transformar a numero el id */
  //     const no = +segments[segments.length - 2];
  //     // await this.pokemonModel.create({ name, no });
  //     inserPromisesArray.push(this.pokemonModel.create({ name, no }));
  //   });
  //   await Promise.all(inserPromisesArray);
  //   return 'Seed executed';
  // }
  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');

      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });
    this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
