import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  info : any | null []=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data=>{
      console.log(data);
      this.info=data;
      this.dtTrigger.next();
    })
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
