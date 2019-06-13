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
  categorieArticle: string;
  listTypeTrie = ["croissant", "décroissant"];
  typeTrie = "";
  rangePrix = 100;

  constructor(private router: Router, private route: ActivatedRoute, public articlesService: ArticlesService) {}
    ngOnInit() {
      this.categorieArticle = this.route.snapshot.paramMap.get('categorieArticle');
      this.articles = this.articlesService.customFilter(this.categorieArticle);
      if(this.articles.length === 0) {
        this.articlesService.getArticles().subscribe(response => this.articles = response);
      }
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
