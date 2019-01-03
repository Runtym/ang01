import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  constructor(private route:Router){

  }

  goPage(url:string){
    this.route.navigate(['/'+url]);
  }
}
