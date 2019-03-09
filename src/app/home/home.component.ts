import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  constructor() {}
  ngOnInit() {
    this.articles = [
      { id: '1', title: 'Title1', categorie: 'accessoires', image: '../assets/images/1.jpg', description: 'desc1', price: 12, reference: 'ref1', promo: 4, couleur: 'rouge', taille: 36},
      { id: '2', title: 'Title2', categorie: 'accessoires', image: '../assets/images/2.jpg', description: 'desc2', price: 12, reference: 'ref2', promo: 4, couleur: 'rouge', taille: 36},
      { id: '3', title: 'Title3', categorie: 'accessoires', image: '../assets/images/3.jpg', description: 'desc3', price: 12, reference: 'ref3', promo: 4, couleur: 'rouge', taille: 36},
      { id: '4', title: 'Title4', categorie: 'accessoires', image: '../assets/images/4.jpg', description: 'desc4', price: 12, reference: 'ref4', promo: 4, couleur: 'rouge', taille: 36},
      { id: '5', title: 'Title5', categorie: 'accessoires', image: '../assets/images/5.jpg', description: 'desc5', price: 12, reference: 'ref5', promo: 4, couleur: 'rouge', taille: 36},
      { id: '6', title: 'Title6', categorie: 'accessoires', image: '../assets/images/6.jpg', description: 'desc6', price: 12, reference: 'ref6', promo: 4, couleur: 'rouge', taille: 36},
      { id: '7', title: 'Title7', categorie: 'accessoires', image: '../assets/images/7.jpg', description: 'desc7', price: 12, reference: 'ref7', promo: 4, couleur: 'rouge', taille: 36},
      { id: '8', title: 'Title8', categorie: 'accessoires', image: '../assets/images/8.jpg', description: 'desc8', price: 12, reference: 'ref8', promo: 4, couleur: 'rouge', taille: 36},
      { id: '9', title: 'Title9', categorie: 'accessoires', image: '../assets/images/9.jpg', description: 'desc9', price: 12, reference: 'ref9', promo: 4, couleur: 'rouge', taille: 36},
      { id: '10', title: 'Title10', categorie: 'accessoires', image: '../assets/images/10.jpg', description: 'desc10', price: 12, reference: 'ref10', promo: 4, couleur: 'rouge', taille: 36},
      { id: '11', title: 'Title11', categorie: 'accessoires', image: '../assets/images/11.jpg', description: 'desc11', price: 12, reference: 'ref11', promo: 4, couleur: 'rouge', taille: 36},
      { id: '12', title: 'Title12', categorie: 'accessoires', image: '../assets/images/12.jpg', description: 'desc12', price: 12, reference: 'ref12', promo: 4, couleur: 'rouge', taille: 36},
      { id: '13', title: 'Title13', categorie: 'accessoires', image: '../assets/images/13.jpg', description: 'desc13', price: 12, reference: 'ref13', promo: 4, couleur: 'rouge', taille: 36},
      { id: '14', title: 'Title14', categorie: 'accessoires', image: '../assets/images/14.jpg', description: 'desc14', price: 12, reference: 'ref14', promo: 4, couleur: 'rouge', taille: 36},
      { id: '15', title: 'Title15', categorie: 'accessoires', image: '../assets/images/15.jpg', description: 'desc15', price: 12, reference: 'ref15', promo: 4, couleur: 'rouge', taille: 36},
      { id: '16', title: 'Title16', categorie: 'accessoires', image: '../assets/images/16.jpg', description: 'desc16', price: 12, reference: 'ref16', promo: 4, couleur: 'rouge', taille: 36}
    ];
  }

}
