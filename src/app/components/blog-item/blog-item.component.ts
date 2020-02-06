import { Component, OnInit, Input } from '@angular/core';
import { BlogModel } from '../../BlogModel'

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: BlogModel;
  constructor() { 
    
  }

  MultiplyRating(value: number){
    return value * 10;
  }

  ngOnInit() {

  }

}
