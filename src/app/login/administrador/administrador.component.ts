import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  form:FormGroup;
  loading=false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router) { 
    this.form=this.fb.group({
      usuario:["", Validators.required],
      password:["", Validators.required]
    })
  }

  // VALIDAR LA ENTRADA DEL ADMINISTRADOR
  public ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario==="jperez" && password==="569641"){
      this.fakeLoading();
      this.router.navigate(["principalAdministrador"]);
    }else{
      this.error();
    }

    console.log(usuario, password)
  }

  // SEGUNDO Y MEDIO DE CARGA
  public fakeLoading(){
    this.loading=true;

    setTimeout(() => {
      this.loading=false;
    }, 1500);
  }

  public error(){
    this._snackBar.open("Usuario o Contraseña incorrectos", "Aceptar",{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  public cambiarUsuario(){
    this.router.navigate(["loginUsuario"]);
  }

  ngOnInit(): void {
  }

}
