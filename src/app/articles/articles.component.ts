import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article.model';
import { articles } from '../shared/bd/articles';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
   constructor() {}
   ngOnInit() {
     this.articles = articles;
   }

}
