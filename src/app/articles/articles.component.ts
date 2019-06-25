import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    if(pathCategorieUser && pathCategorieUser.path === 'enfant' || pathCategorieUser.path === 'femme' || pathCategorieUser.path === 'hommr') {
      this.categorieUser = pathCategorieUser.path;
    }
    this.categorieArticle = this.activatedRoute.snapshot.paramMap.get('categorieArticle');
    this.filterParams.categorieUser = this.categorieUser;
    this.filterParams.categorieArticle = this.categorieArticle;
    this.articles = this.articlesService.customFilter(this.filterParams);
    if(this.articles.length > 0) sessionStorage.setItem('articles', JSON.stringify(this.articles));
    if(this.articles.length === 0) this.articles = JSON.parse(sessionStorage.getItem('articles'));
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
