import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogModel } from '../../BlogModel';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: BlogModel;
  @Output() deleteBlog: EventEmitter<BlogModel> = new EventEmitter();
  constructor() { 
    
  }

  emitToParent(){
    //console.log(this.blog);
    this.deleteBlog.emit(this.blog);
  }

  MultiplyRating(value: number){
    return value * 10;
  }

  ngOnInit() {

  }

}
