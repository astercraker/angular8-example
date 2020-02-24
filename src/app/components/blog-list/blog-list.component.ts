import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../BlogModel';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { BlogsService } from "../../services/blogs.service";


@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public showModal:boolean = false;
  post:any;
  public blogs: BlogModel[]

  rForm: FormGroup;
  //inputField: any;
  URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;
  constructor(private fb: FormBuilder, private blogService: BlogsService) {
    
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
    this.blogs = this.blogService.getBlogs();
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
