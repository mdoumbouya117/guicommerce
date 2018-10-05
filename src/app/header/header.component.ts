import { Component, OnInit } from '@angular/core';
//import { ArticlesNumberService } from '../shared/services/articles-number.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public test: number;
  public num: any;

  constructor(/* public articlesNumberService: ArticlesNumberService */) {
    /* this.test = this.articlesNumberService.articlesNumber;
    console.log(this.test); */
      }

  ngOnInit() {
   /*  this.articlesNumberService.testNumberCount.subscribe(res => {
      this.num = res;
    }); */
  }

  increment() {
    /* this.articlesNumberService.testNumberCount.subscribe(res => {
      this.num = res;
    }); */
  }

}
