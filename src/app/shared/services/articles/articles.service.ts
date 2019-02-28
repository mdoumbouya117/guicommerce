import { Injectable } from '@angular/core';
import { Article } from '../../models/article.model';
import { articles } from '../../bd/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles = () => {
    return articles;
  }

  getArticleById = (id: string) => {
    return articles.filter(article => {
      return article.id === id;
    })
  }

  filterArticles = (filterParams: any) => {
    let allMatch: Article[] = [];

    this.getArticles().filter(article => {
    });
    console.log(allMatch.length)
    return allMatch;
  }
}
