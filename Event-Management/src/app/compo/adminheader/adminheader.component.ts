import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {

}
