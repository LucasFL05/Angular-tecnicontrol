import { Cliente } from '../../cliente/models/cliente.model';

export interface Dispositivo {
  id?: number;
  tipo: string;
  marca: string;
  modelo: string;
  cliente: Cliente;
}
