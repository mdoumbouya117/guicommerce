import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { articles } from '../shared/bd/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['../app.component.scss', './articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  categorie: string;
  listTypeTrie = ["croissant", "décroissant"];
  typeTrie = "";
  rangePrix = 100;

  constructor(private router: Router, private route: ActivatedRoute) {}
    ngOnInit() {
      this.articles = articles;
      this.categorie = this.route.snapshot.paramMap.get('categorie');
      
    }

    goToDetails = (article: Article) => {
      this.router.navigate([`enfant/chaussures/${article.reference}`]);  // home
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
