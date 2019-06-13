import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article.model';
// import { ArticlesService } from '../shared/services/articles/articles.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  constructor(/* private articlesService: ArticlesService */) {}
  ngOnInit() {
    // this.articlesService.getArticles().subscribe(articles => this.articles = articles);
  }

}
