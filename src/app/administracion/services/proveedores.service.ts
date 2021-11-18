import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private baseURL :string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getProveedores():Observable<any>{
    return this.http.get<any>(`${this.baseURL}/proveedores`);
  }

}
