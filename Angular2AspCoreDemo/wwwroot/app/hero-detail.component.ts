import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: Route
  ) {
  }

  ngOnInit() {
//      
//    let id = +curr.getParam('id');
//    this.heroService.getHero(id)
//      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
