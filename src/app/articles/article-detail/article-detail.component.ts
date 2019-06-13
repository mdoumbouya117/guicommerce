import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared/services/articles/articles.service'
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  public article;

  constructor(private cartService: CartService, private articlesService: ArticlesService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.article = this.articlesService.getArticleByReference(this.activatedRoute.snapshot.paramMap.get('reference'))[0];
  }

  increment() {
    this.cartService.increment();
  }

  decrement() {
    this.cartService.decrement();
  }

}
