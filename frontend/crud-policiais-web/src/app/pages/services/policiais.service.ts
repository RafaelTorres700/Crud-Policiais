import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Policiais {
  id?: number;
  rg_civil: string;
  rg_militar: string;
  cpf: string;
  data_nascimento: Date | null;
  matricula: string;
}

@Injectable({
  providedIn: 'root'
})
export class PoliciaisService {

  private api = 'http://localhost:3025/api/policiais';

  constructor(private http: HttpClient) { }

  getPoliciais(): Observable<Policiais[]> {
    return this.http.get<Policiais[]>(this.api);
  }

  adicionar(policial: Policiais): Observable<any> {
    return this.http.post(this.api, policial);
  }

  atualizar(id: number, policial: Policiais): Observable<any> {
    return this.http.put(`${this.api}/${id}`, policial);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
