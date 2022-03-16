import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: 'forms',
    loadChildren: () => import('./formsection/formsection.module').then(m => m.FormsectionModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
