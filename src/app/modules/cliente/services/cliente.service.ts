import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

    private http = inject(HttpClient);
    private apiUrl ='http://localhost:8080/api/clientes';

    getClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.apiUrl);
    }

    getClienteById(id: number): Observable<Cliente> {
      return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
    }

    createCliente(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.apiUrl, cliente);
    }

    updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(`${this.apiUrl}/${id}`, cliente);
    }

    deleteCliente(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
