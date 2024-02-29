import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminheaderComponent } from "../adminheader/adminheader.component";
import { Employee } from '../../class/employee';
import { ServiceService } from '../../service/service.service';

@Component({
    selector: 'view-employee',
    standalone: true,
    templateUrl: './view-employee.component.html',
    styleUrl: './view-employee.component.css',
    imports: [AdminheaderComponent, RouterLink]
})
export class ViewEmployeeComponent {


  constructor(private router:Router, private route:ActivatedRoute, private service:ServiceService){

  }
  name:any = sessionStorage.getItem("username");
 
  id!:string;

  employee!:Employee;

  ngOnInit(): void {
    if(this.name == null){
      this.router.navigate(['login']);
    }

    this.route.paramMap.subscribe(params=>{
      this.id= params.get('id')!;
    });
    this.service.GetEmpById(this.id).subscribe(
      data => this.employee=data,
      err => console.log(err)
    );
  }
  deleteEmp() {
    this.service.deleteById(this.id).subscribe();
    alert("Deleted Successfully!");
    this.router.navigate(['/employee']);
  }
}
