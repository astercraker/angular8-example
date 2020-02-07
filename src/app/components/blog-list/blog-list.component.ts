import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../BlogModel';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public showModal:boolean = false;
  post:any;
  public blogs: BlogModel[] = [
    {
      name : "Fisrt Title Post",
      rating: Math.round(Math.random() * 5), 
      date  : new Date("02/15/2020"),
      description : "Esta es la descripción del post bien chidori, trata de temas bien chidoris entra neta",
      imageUrl : "https://images.unsplash.com/photo-1495229159533-c7fcb0f1f014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    }
  ];

  rForm: FormGroup;
  //inputField: any;
  URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;
  constructor(private fb: FormBuilder) {
    
    this.rForm = fb.group(
      {
        'name': [null, Validators.required],
        'description': [null, Validators.compose([Validators.required])],
        'imageUrl': [null, Validators.compose([Validators.required,Validators.pattern(this.URL_REGEXP)])]
      }
    );
    

  }

  deleteBlog(value: BlogModel){
    this.blogs.splice( this.blogs.indexOf(value) ,1);
  }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.blogs.push({
      name : f.value.name,
      rating: Math.round(Math.random() * 5), 
      date  : new Date(),
      description : f.value.description,
      imageUrl : f.value.imageUrl,
    }); 
    this.showModal = false;
    this.rForm.reset();
    //this.rForm.markAsPristine();
    //this.rForm.reset(this.rForm.value);
  }
  saveChange(input: any): void {
    
    this.blogs.push({
      name : input.name,
      rating: Math.round(Math.random() * 5), 
      date  : new Date(),
      description : input.description,
      imageUrl : input.imageUrl,
    }); 
    this.showModal = false;
    this.rForm.markAsPristine();
    this.rForm.reset(this.rForm.value);
  }
}
