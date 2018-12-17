import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  increment() {
    this.cartService.increment();
  }

  decrement() {
    this.cartService.decrement();
  }

}
