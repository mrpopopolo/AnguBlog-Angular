import { Injectable } from '@angular/core';
import { Article } from './model/article'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesUrl: string;

  constructor(private http: HttpClient) {
    this.articlesUrl = "http://localhost:8080/articles";
   }

   public getArticles() : Observable<Article[]> {
     return this.http.get<Article[]>(this.articlesUrl);
   }

   public getArticle(id: number) : Observable<Article> {
     return this.http.get<Article>(this.articlesUrl+"/"+id);
   }

   public save(article: Article){
     article.date = new Date();
     return this.http.post<Article>(this.articlesUrl, article);
   }

   public delete(id: number) {
     return this.http.post<Article>("http://localhost:8080/delarticle", id);
   }
}
