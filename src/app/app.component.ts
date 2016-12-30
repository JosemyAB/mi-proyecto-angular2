import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //VARIABLES
  title = 'Aplicación prueba Angular 2';
  visible = false;
  claseJosemy = 'css-Josemy'

  //METODOS
  decirAdios() {

    if (this.visible) {
      this.title = 'YA HAS SALIDO¡';
    }
    else {
      this.visible = true;
    }
  }
}
