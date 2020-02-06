import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../BlogModel';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  showModal = false;
  blogs: BlogModel[] = [
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    }
  ]
  constructor() {

  }

  ngOnInit() {
  }

}
