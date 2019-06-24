import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.scss']
})
export class HommeComponent implements OnInit {

 public categorieArticle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((params) => {
      if(params instanceof NavigationEnd) {
        this.categorieArticle = this.activatedRoute.snapshot.paramMap.get('categorieArticle') ? this.activatedRoute.snapshot.paramMap.get('categorieArticle') : '';
      }
    });
   }

  ngOnInit() {
  }

  gotoArticleCategorie(categorieArticle: string) {
    this.router.navigate([`homme/${categorieArticle}`]);
  }

}
