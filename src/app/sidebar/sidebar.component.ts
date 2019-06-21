import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public categorieUser: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.router.events.subscribe((params) => {
      if(params instanceof NavigationEnd) {
        this.categorieUser = params["url"];
      }
    });
  }

  ngOnInit() { }
}
