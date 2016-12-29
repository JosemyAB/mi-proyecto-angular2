import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //VARIABLES
  title = 'app works!. Josemy PUTO AMO';
  visible = false;

  //METODOS
  decirAdios() {

    if (this.visible) {
      this.title = 'YA HAS SALIDO¡'      
    }
    else {
      this.visible = true;
    }
  }
}
