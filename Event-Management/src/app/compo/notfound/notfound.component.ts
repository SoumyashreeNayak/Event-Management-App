import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { HeaderloginComponent } from "../headerlogin/headerlogin.component";

@Component({
    selector: 'app-notfound',
    standalone: true,
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.css',
    imports: [RouterLink, RouterOutlet, HeaderComponent, HeaderloginComponent]
})
export class NotfoundComponent {

}
