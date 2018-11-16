import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //router: Router;
  constructor(private router: Router) {}

  ngOnInit() {}

  increment(router: Router) {
    console.log('test')
   // router.navigate(['/enfant']);
  }

  gotoDetail(): void {
   this.router.navigate(['/enfant']);
  }

}
