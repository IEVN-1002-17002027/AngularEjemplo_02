import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo_02';

  dupliccarNumero(n:number):number{
    return n * 2;
  }
  pelicula={
    titulo:'Peli  Random',
    fechaLanzamiento:new Date(),
    precio:1827
  }
}


