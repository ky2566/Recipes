import { Component } from '@angular/core';
import  { HeaderComponent } from './header.component';


@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  Directives: [HeaderComponent]
})
export class AppComponent {
  
}
