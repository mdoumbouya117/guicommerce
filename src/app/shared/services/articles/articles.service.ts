import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { articles } from '../../bd/articles';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private url = 'assets/data/articles.json';
  public articles: Article[] = [];

  constructor(private http: HttpClient) { 
    this.http.get<Article[]>(this.url).subscribe(response => this.articles = response);
  }

  setArticles() {
    this.http.get<Article[]>(this.url).subscribe(response => this.articles = response);
  }

  getArticles(): Article[] {
    // return this.http.get<Article[]>(this.url);
    this.setArticles();
    console.log('test ', this.articles)

    return this.articles;
  };

  getArticleById = (id: string) => {
    return articles.filter(article => {
      return article.id === id;
    })
  }

  filterArticles(filterParams: any): any {
      this.articles = this.getArticles().filter(article => {
        return filterParams.couleurs.includes(article.couleur) || filterParams.tailles.includes(article.taille) || article.price <= filterParams.rangePrix;
      });
  }
}
