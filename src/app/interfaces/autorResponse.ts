import { AutorDTO } from "./autorDTO";

export interface AutorResponse {
  code: number;
  message: string;
  data: AutorDTO[];
}
