export interface HttpAdapter {
  /* es un generico */
  get<T>(url: string): Promise<T>;
}
