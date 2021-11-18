import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';
import { AuthService } from '../../../../login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private fb : FormBuilder,
    private empleado : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email : ["", Validators.required],
      nombre : ["", Validators.required],
      nombreUsuario : ["", Validators.required],
      password : ["", Validators.required],
      rol : ["", Validators.required]
    })
  }

  agregarEmpleado(){
    this.empleado.agregarEmpleado(this.form.value).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl("/administracion/empleados")
    })
  }

}
