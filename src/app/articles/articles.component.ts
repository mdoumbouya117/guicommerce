import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { articles } from '../shared/bd/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  categorie: string;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.articles = articles;
    this.categorie = this.route.snapshot.paramMap.get('categorie');
  }

  goToDetails = (article) => {
    this.router.navigate([`enfant/chaussures/${article.reference}`]);  // home

  }



}
