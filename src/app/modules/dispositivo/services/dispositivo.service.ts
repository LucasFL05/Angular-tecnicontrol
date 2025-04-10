import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivo.model';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/dispositivos';

  getDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(this.apiUrl);
  }

  getDispositivoById(id: number): Observable<Dispositivo> {
    return this.http.get<Dispositivo>(`${this.apiUrl}/${id}`);
  }

  createDispositivo(dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.post<Dispositivo>(this.apiUrl, dispositivo);
  }

  updateDispositivo(id: number, dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.put<Dispositivo>(`${this.apiUrl}/${id}`, dispositivo);
  }

  deleteDispositivo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
