import { Component, OnInit} from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) {
    this.article = new Article();
   }

   ngOnInit() {
     this.getArticle();
   }

   getArticle() {
     const id = +this.route.snapshot.paramMap.get('id');
     this.articleService.getArticle(id)
       .subscribe(article => this.article = article);
   }

  onSubmit() {
    this.articleService.save(this.article).subscribe(
      result => this.gotoArticleList());
  }

  gotoArticleList(){
    this.router.navigate(['/articles']);
  }

  delete(article: Article): void {
    this.articleService.delete(article.id).subscribe();
    this.gotoArticleList();
  }

}
