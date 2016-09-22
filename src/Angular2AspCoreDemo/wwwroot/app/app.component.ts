import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ["app/app.component.css"],
  providers: [
      HeroService
  ]
})


export class AppComponent implements OnInit {
  title = 'Tour of Heroes an Angular2 Adventure';
  constructor(private router: Router) {}
  ngOnInit(){
      this.router.navigate(['/dashboard']);
  }
}
