import { Component, OnInit }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
  providers: [
      HeroService
  ]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit(){
      
  }
}
