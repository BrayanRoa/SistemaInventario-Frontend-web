import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  isCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  log(): void {
    console.log('click dropdown button');
  }

  salir(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

}
