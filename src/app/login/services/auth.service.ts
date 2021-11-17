import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { autenticado } from '../interfaces/autenticado';
import { Router } from '@angular/router';
import { catchError, map, tap } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL   : string =environment.baseURL;
  private _usuario! : autenticado;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(correo:string, password:string){
    const url = `${this.baseURL}/auth/login`;
    const body = {correo, password};

    return this.http.post<any>(url, body).pipe(
      tap(respuesta =>{
        if(respuesta.token!=""){
          localStorage.setItem('token', respuesta.token),
          localStorage.setItem('nombre', respuesta.nombre),
          localStorage.setItem('apellido', respuesta.apellido)
        }

        this._usuario={
          cedula : respuesta.usuario.cedula,
          nombre : respuesta.usuario.nombre
        }
        
      }),
      map(resp => resp.usuario),
      catchError( err =>of(err))
    );
  }

  
}
