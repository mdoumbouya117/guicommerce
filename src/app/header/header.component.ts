import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
import { ArticlesService } from '../shared/services/articles/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss', './header.component.scss']
})
export class HeaderComponent implements OnInit {
  //router: Router;
  public collapsed: boolean = false;
  public url: string = '/';

  countries = [
    {
      id: '3953154c',
      name: 'France',
      code: 'FR',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png'
    },
    {
      id: '8f8c6e98',
      name: 'Guinée',
      code: 'GN',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/320px-Flag_of_Guinea.svg.png'
    },
    {
      id: '169fee1a',
      name: 'Sénégal',
      code: 'SN',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/320px-Flag_of_Senegal.svg.png'
    }
  ];

  selectedCountry = this.countries[0];

  constructor(private router: Router, public cartService: CartService, public articlesService: ArticlesService) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.url = event["url"];
      }
    });
  }

  ngOnInit() {
    // console.log(`${this.articlesService.customFilter('vetements')}`)
  }

  selectCounty = (country) => {
    this.selectedCountry = country;
  }

}
