import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-headerlogin',
    standalone: true,
    templateUrl: './headerlogin.component.html',
    styleUrl: './headerlogin.component.css',
    imports: [RouterLink, RouterOutlet, HeaderComponent]
})
export class HeaderloginComponent {

}
