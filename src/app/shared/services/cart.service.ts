import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public nbArticleInCart = 0;  // private
  constructor() { }

  getNbArticleInCart = () : number => {
    return this.nbArticleInCart;
  }

  increment = () => {
    return this.nbArticleInCart++;
  }

  decrement = () => {
    return this.nbArticleInCart > 0 ? this.nbArticleInCart-- : this.nbArticleInCart;
  }
}
