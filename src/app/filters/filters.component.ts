import { Component, OnInit } from '@angular/core';
import { articles } from '../shared/bd/articles';
import { ArticlesService } from '../shared/services/articles/articles.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  private tab = [];
  public rangePrix = 100; // maxPrice 100

  public couleurs = [
    {code: '#FF0000', label: 'Rouge'},
    {code: '#FFFFFF', label: 'Blanc'},
    {code: '#000000', label: 'Noir'},
    {code: '#0000FF', label: 'Bleu'},
    {code: '#008000', label: 'Vert'},
    {code: '#808080', label: 'Gris'},
    {code: '#800000', label: 'Gris'}
  ];
  public tailles = [
    {label: 34},
    {label: 35},
    {label: 36},
    {label: 37}
  ];
  public filterParams = {
    couleurs: [],
    tailles: [],
    rangePrix: this.rangePrix
  };

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

  reinitFilters = () => {
    this.articlesService.getArticles();
  }

  submit() {
    this.articlesService.filterArticles(this.filterParams);
  }

  removeElementInArray = (array: string[], element: string) => {
    return array.filter(ele => {
      return ele != element;
    })
  }

  filters(e: any, type: string) {
    if(type === 'couleur') {
      if(e.target.checked) {
        this.filterParams.couleurs.push(e.target.value);
      } else {
        this.filterParams.couleurs = this.removeElementInArray(this.filterParams.couleurs, e.target.value);
      }
    }

    if(type === 'taille') {
      if(e.target.checked) {
        this.filterParams.tailles.push(e.target.value);
      } else {
        this.filterParams.tailles = this.removeElementInArray(this.filterParams.tailles, e.target.value);
      }
    }
  }
}