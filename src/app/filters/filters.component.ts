import { Component, OnInit } from '@angular/core';
import { articles } from '../shared/bd/articles';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  private tab = [];
  public rangePrix = 100; // maxPrice 100

  constructor() { }

  ngOnInit() {
  }

  filters(e, type) {
    articles.filter(article => {
      if(type === 'couleur') {
        if(article.couleur == e.target.value) {
          this.tab.push(article)
        }
      }
      if(type === 'range') {
        if(article.price <= e.target.value) { // this.rangePrix
          this.tab.push(article);
        }
      }
      if(type === 'taille') {
        if(article.taille == e.target.value) {
          this.tab.push(article)
        }
      }
    });
    console.log(this.tab.length);
  }
}
