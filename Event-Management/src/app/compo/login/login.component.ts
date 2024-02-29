import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, CommonModule, HeaderComponent]
})
export class LoginComponent {

  constructor(private router:Router){}

  private username!:string;
  private password!:string;
  status:boolean =false;
  submit(formdata:any) {

    this.username= formdata.value["username"];
    this.password= formdata.value["password"];
    
    if(this.username ==="admin" && this.password ==="admin"){
      sessionStorage.setItem("username", this.username);
      this.router.navigate(["/home"]);
     
    }else{
      this.status =true;
    }
  
  }
}
