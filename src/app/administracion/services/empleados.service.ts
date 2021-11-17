import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseURL : string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<any>{
    return this.http.get<any>(`${this.baseURL}/usuarios`);
  }

  obtenerEmpleado(id:string){
    return this.http.get<any>(`${this.baseURL}/usuarios/${id}`);
  }

  // TODO: REALIZAR EL METODO DELETE?
  eliminarEmpleado(id:string){
    
  }
}
