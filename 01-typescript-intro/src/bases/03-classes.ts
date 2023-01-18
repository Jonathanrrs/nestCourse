import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

// export class Pokemon {
// public id: number;
// public name: string;

// constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("constructor llamado");
// }
// }

/* forma corta */
export class Pokemon {
  get imagerUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  /* readonly no permite cambiarlo ni dentro de la clase */
  constructor(
    public readonly id: number,
    public name: string /* public imageUrl: string */
  ) {}

  scream() {
    console.log(`${this.name}`.toUpperCase());
    this.speak();
  }

  private speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/4`
    );
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "charmander");
// console.log(charmander);
// private no deja utilizarlo si se esta fuera de la clase
// charmander.speak()

// console.log(charmander.getMoves());
charmander.getMoves();
