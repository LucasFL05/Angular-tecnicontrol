import { Dispositivo } from '../../dispositivo/models/dispositivo.model';

export interface OrdemDeServico {
  id?: number;
  descricaoProblema: string;
  status: 'Aberta' | 'Em andamento' | 'Concluída';
  dataAbertura?: string;
  dataConclusao?: string;
  dispositivo: Dispositivo;
}
