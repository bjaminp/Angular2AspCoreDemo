import { Component, OnInit }       from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ["app/app.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      HeroService
  ]
})
@Routes([
    {path: '/dashboard', component: DashboardComponent},
    {path: '/detail/:id', component: HeroDetailComponent},
    {path: '/heroes', component: HeroesComponent}
])

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  constructor(private router: Router) {}
  ngOnInit(){
      this.router.navigate(['/dashboard']);
  }
}
