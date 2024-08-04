import { categoriaDTO } from "./categoriaDTO";

export interface CategoriasResponse {
    code: number;
    message: string;
    data: categoriaDTO[];
  }
  