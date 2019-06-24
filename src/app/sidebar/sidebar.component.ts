import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // public categorieUser: string;
  private tabUrl: Array<string>;
  public categorieUser: string;

  public tabUserCat = ['enfant', 'femme', 'homme'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((params) => {
      if(params instanceof NavigationEnd) {
        this.categorieUser = params["url"];
        this.tabUrl = this.categorieUser.split('/');
        if(this.tabUrl.length >= 2) {
          if(this.tabUrl[1] === 'enfant' || this.tabUrl[1] === 'femme' || this.tabUrl[1] === 'homme') {
            this.categorieUser = this.tabUrl[1]; 
          } else {
            this.categorieUser = 'enfant';
          }
        }
      }
    });
  }

  ngOnInit() { }

  gotoArticleCategorie(categorieArticle: string) {
    this.router.navigate([`${this.categorieUser}/${categorieArticle}`]);
  }
}
