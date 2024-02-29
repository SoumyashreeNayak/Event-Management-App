import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminheaderComponent } from "../adminheader/adminheader.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AdminheaderComponent]
})
export class HomeComponent implements OnInit{
  name:any= sessionStorage.getItem("username");
  constructor(private router:Router) {}
  ngOnInit(): void {
    if(this.name == null){
      this.router.navigate(['login']);
    }
  }
}
