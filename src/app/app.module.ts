import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleService } from './article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleUpdateComponent } from './article-update/article-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleFormComponent,
    ArticleListComponent,
    ArticleUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
