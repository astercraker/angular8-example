import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    styleUrls: ['./mi-componente.component.scss']
  })
  export class MiComponente {
      public titulo: string;
      public comentario: string;
      public year: number;
      constructor(){
          this.titulo = "Este es un titulo del blog";
          this.comentario = "Comentario del blog";
          this.year = 2019;
          console.log("Se cargo");
      }
  }