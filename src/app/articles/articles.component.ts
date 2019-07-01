import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { articles } from '../shared/bd/articles';
import { ArticlesService } from '../shared/services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['../app.component.scss', './articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  filterParams: any = {};
  categorieArticle: string;
  categorieUser: string;
  listTypeTrie = ["croissant", "décroissant"];
  typeTrie = "";
  rangePrix = 100;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public articlesService: ArticlesService) {
    let pathCategorieUser: any = this.activatedRoute.snapshot.url[0] ? this.activatedRoute.snapshot.url[0] : '';
    if(pathCategorieUser && (pathCategorieUser.path === 'enfant' || pathCategorieUser.path === 'femme' || pathCategorieUser.path === 'homme')) {
      this.categorieUser = pathCategorieUser.path;
      this.categorieArticle = this.activatedRoute.snapshot.paramMap.get('categorieArticle');
      this.filterParams.categorieUser = this.categorieUser;
      this.filterParams.categorieArticle = this.categorieArticle;
      if(JSON.parse(sessionStorage.getItem('articles')) && JSON.parse(sessionStorage.getItem('articles')).length > 0) {
        let articles = JSON.parse(sessionStorage.getItem('articles'));
        if(articles[0].categorieUser != this.categorieUser || articles[0].categorieArticle != this.categorieArticle) {
          this.articles = this.articlesService.customFilter(this.filterParams);
          sessionStorage.setItem('articles', JSON.stringify(this.articles));
        } else {
          this.articles = JSON.parse(sessionStorage.getItem('articles'));
        }
      } else {
        this.articles = this.articlesService.customFilter(this.filterParams);
        sessionStorage.setItem('articles', JSON.stringify(this.articles));
      }
    } else {
      router.navigate(['']);
    }
  }
    ngOnInit() {
    }

    goToDetails = (article: Article) => {
      this.router.navigate([`article-detail/${article.reference}`]);  // home
    }

    trierParPrix = (typeTrie: any) => {
      return typeTrie === 'croissant' ?
        this.articles.sort( (a, b) => {
          return a.price - b.price;
        })
        :
        this.articles.sort( (a, b) => {
          return b.price - a.price;
        })
    }
}
