import axios from "axios";
/* adapter se adapta una funcionalidad externa a mi codigo */

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter{
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;
  /* T simboliza que es un generico */
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }
  //   async post(url: string, data: any) {}
  //   async patch(url: string, data: any) {}
  //   async delete(url: string, data: any) {}
}
