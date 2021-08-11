import { Component } from '@angular/core';
import { faCoffee,faCarBattery } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carparts';

  faCoffee = faCoffee;
  faCarBattery = faCarBattery;

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
