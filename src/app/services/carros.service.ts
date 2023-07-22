import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrosModel } from '../models/Carros-Model';

@Injectable({
  providedIn: 'root',
})
export class CarrosServices {
  apiURL: string = 'https://baknuvem-production.up.railway.app/api/';

  constructor(private http: HttpClient) {}

  getCarros(): Observable<CarrosModel[]> {
    return this.http.get<CarrosModel[]>(`${this.apiURL}getcarros`);
  }
}
