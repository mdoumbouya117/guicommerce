import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //router: Router;
  public collapsed: boolean = false;

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

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {}

  selectCounty = (country) => {
    this.selectedCountry = country;
  }

  gotoDetail(): void {
   this.router.navigate(['/enfant']);
  }

}
