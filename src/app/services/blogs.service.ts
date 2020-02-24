import { Injectable } from '@angular/core';
import { BlogModel } from "../BlogModel";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  public blogs: BlogModel[] = [
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    }
  ];
  constructor() { }

  getBlogs() : BlogModel[]{
    return this.blogs;
  }
}
