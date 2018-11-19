import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { articles } from '../shared/bd/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(private router: Router) {}
  ngOnInit() {
    this.articles = articles;
  }

  goToDetails = (article) => {
    console.log(article);
    this.router.navigate(['enfant/jh/jh'])  // home
    console.log('hello')

  }



}
