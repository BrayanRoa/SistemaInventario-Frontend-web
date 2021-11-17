import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseURL : string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCategorias():Observable<any>{
    return this.http.get(`${this.baseURL}/categorias`)
  }

  // TODO: REALIZAR EL METODO POST
  agregarCategoria(categoria:any, token:string):Observable<any>{
    const header: any = {
      "Authorization": token
    }
    const httpOption = {
      headers: new HttpHeaders(header)
    }
    return this.http.post<any>(`${this.baseURL}/categorias`, categoria, httpOption);
  }


  // TODO: REALIZAR EL METODO PUT
  editarCategoria(id:string, token:string, categoria:any):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization' : token
    })
    return this.http.put<any>(`${this.baseURL}/categorias/${id}`, categoria);
  }

  // TODO: REALIZAR EL METODO DELETE?
  eliminarCategoria(){

  }
}
