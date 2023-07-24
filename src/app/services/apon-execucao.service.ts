import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApoExecucaoModel } from '../models/apo-execucao-model';

@Injectable({
  providedIn: 'root',
})
export class AponExecucaoService {
  apiURL: string = 'https://baknuvem-production.up.railway.app/api/';

  constructor(private http: HttpClient) {}

  ApoExecucaoInsert(aponexecucao: ApoExecucaoModel) {
    return this.http.post<ApoExecucaoModel>(
      `${this.apiURL}aponexec`,
      aponexecucao
    );
  }

  ApoExecucaoUpdate(aponexecucao: ApoExecucaoModel) {
    return this.http.put<ApoExecucaoModel>(
      `${this.apiURL}aponexec`,
      aponexecucao
    );
  }

  ApoExecucaoDelete(id_empresa: number, id: number) {
    return this.http.delete<ApoExecucaoModel>(
      `${this.apiURL}aponexec/${id_empresa}/${id}`
    );
  }
}
