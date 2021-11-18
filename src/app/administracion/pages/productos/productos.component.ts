import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  data:any[]=[];

  constructor(private http: ProductosService) { }

  ngOnInit(): void {
    this.http.getProductos(localStorage.getItem('token')!).subscribe(data=>{
      this.data=data;
    })
  }

}
