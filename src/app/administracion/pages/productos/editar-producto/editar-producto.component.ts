import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/administracion/services/categorias.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form! : FormGroup;

  categorias : any [] =[]

  constructor(
    private categoria: CategoriasService,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre     : ["", Validators.required],
      precio     : ["", Validators.required],
      cantidad   : ["", Validators.required],
      iva        : ["", Validators.required],
      retencion  : ["", Validators.required],
      cantidad_minima : ["", Validators.required],
      idCategoria : ["", Validators.required]
    })

    

    this.categoria.getCategorias(localStorage.getItem('token')!).subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias)
    })
  }

  obtenerProducto(){
    
  }

  editarProducto(){

  }

}
