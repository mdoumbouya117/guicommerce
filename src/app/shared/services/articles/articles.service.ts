import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { articles } from '../../bd/articles';
import { from } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private url = 'assets/data/articles.json';
  public articles: Article[] = [];

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.http.get<Article[]>(this.url).subscribe(response => this.articles = response);
  }

  setArticles() {
    this.http.get<Article[]>(this.url).subscribe(response => this.articles = response);
  }

  getArticles() {
    return this.http.get<Article[]>(this.url);
  };

  getArticleById = (id: string) => {
    return articles.filter(article => {
      return article.id === id;
    })
  }

  getArticleByReference = (reference: string) => {
    return articles.filter(article => {
      return article.reference === reference;
    })
  }

  customFilter = (filterParams: any) => {
    this.http.get<Article[]>(this.url).subscribe(response => this.articles = response);
    this.articles = this.articles.filter(res => {
      return (
        res.categorieUser == filterParams.categorieUser
         && 
         res.categorieArticle == filterParams.categorieArticle
      )
    })
    return this.articles;
  }

  filterArticles(filterParams: any): any {
    this.articles = JSON.parse(sessionStorage.getItem('articles')).filter(res => {
      if(res.price <= filterParams.rangePrix && filterParams.couleurs.includes(res.couleur) && filterParams.tailles.includes(res.taille+"")) return res
    });
/*       this.articles = this.getArticles().filter(article => {
        return filterParams.couleurs.includes(article.couleur) || filterParams.tailles.includes(article.taille) || article.price <= filterParams.rangePrix;
      }); */
  }
}
