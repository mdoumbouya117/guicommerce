import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.scss']
})
export class FemmeComponent implements OnInit {

 public categorieArticle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((params) => {
      if(params instanceof NavigationStart) {
        this.categorieArticle = this.activatedRoute.snapshot.paramMap.get('categorieArticle') ? this.activatedRoute.snapshot.paramMap.get('categorieArticle') : '';
      }
    });
  }

  ngOnInit() { }

  gotoArticleCategorie(categorieArticle: string) {
    this.router.navigate([`femme/${categorieArticle}`]);
  }

}
