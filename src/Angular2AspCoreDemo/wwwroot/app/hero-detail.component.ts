import { Component, OnInit } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
})
export class HeroDetailComponent implements OnActivate {
  hero: Hero;

  constructor(
    private heroService: HeroService) {
  }

  routerOnActivate(curr: RouteSegment) {
    let id = +curr.getParam('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
