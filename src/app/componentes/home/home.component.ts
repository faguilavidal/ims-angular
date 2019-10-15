import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

// DATA DE PRUEBA
numero:number = 0;

ordenesPendientes(){
  this.numero += 10;
}

// FIN DATA DE PRUEBA

}
