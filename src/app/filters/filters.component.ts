import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
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
    {code: '#800000', label: 'Marron'}
  ];
  public tailles = [
    {label: 28},
    {label: 29},
    {label: 30},
    {label: 31},
    {label: 32},
    {label: 33},
    {label: 34},
    {label: 35},
    {label: 36},
    {label: 37},
    {label: 38},
    {label: 39},
    {label: 40},
    {label: 41},
    {label: 42},
    {label: 43},
    {label: 44},
    {label: 45},
    {label: 46},
    {label: 47},
    {label: 48},
    {label: 49},

    {label: 'XXS'},
    {label: 'XS'},
    {label: 'S'},
    {label: 'M'},
    {label: 'L'},
    {label: 'XL'},
    {label: 'XXL'}

  ];
  public filterParams = {
    couleurs: [],
    tailles: [],
    rangePrix: this.rangePrix
  };
  public categorieArticle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private articlesService: ArticlesService) {
    this.router.events.subscribe((params) => {
      if(params instanceof NavigationEnd) {
        this.categorieArticle = this.activatedRoute.snapshot.paramMap.get('categorieArticle') ? this.activatedRoute.snapshot.paramMap.get('categorieArticle') : '';
      }
    });
  }

  ngOnInit() {
  }

  reinitFilters = () => {
    this.articlesService.getArticles();
  }

  submit() {
    // this.articlesService.customFilter(this.filterParams)
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