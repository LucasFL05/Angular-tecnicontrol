import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemDeServico } from '../../ordem-servico/models/ordem-servico.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdemServicoService {
  private readonly apiUrl = 'http://localhost:8080/api/ordens';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrdemDeServico[]> {
    return this.http.get<OrdemDeServico[]>(this.apiUrl);
  }

  getById(id: number): Observable<OrdemDeServico> {
    return this.http.get<OrdemDeServico>(`${this.apiUrl}/${id}`);
  }

  create(ordem: OrdemDeServico): Observable<OrdemDeServico> {
    return this.http.post<OrdemDeServico>(this.apiUrl, ordem);
  }

  update(id: number, ordem: OrdemDeServico): Observable<OrdemDeServico> {
    return this.http.put<OrdemDeServico>(`${this.apiUrl}/${id}`, ordem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
