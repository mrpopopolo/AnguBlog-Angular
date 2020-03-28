import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';

const routes: Routes = [
  {path: 'articles', component: ArticleListComponent },
  {path: 'addarticle', component: ArticleFormComponent },
  { path: 'update/:id', component: ArticleUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
