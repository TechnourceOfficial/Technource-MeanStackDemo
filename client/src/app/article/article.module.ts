import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import {ArticleRoutingModule} from './article-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
