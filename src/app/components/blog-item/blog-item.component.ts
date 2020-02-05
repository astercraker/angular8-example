import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  public name: string = "Fisrt Title Post";
  public date: Date = new Date("02/15/2020");
  public description: string = "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta";
  public imageUrl: string = "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  constructor() { 

  }

  ngOnInit() {

  }

}
