import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cantidad: number = 0; // Cantidad ingresada en Quetzales
  resultado: number = 0; // Resultado de la conversión

  constructor() {}

  convertir() {
    if (this.cantidad !== null) {
      this.resultado = this.cantidad * 8; // Tasa fija de conversión
    }
  }
}
