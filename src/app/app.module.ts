import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    BlogItemComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
