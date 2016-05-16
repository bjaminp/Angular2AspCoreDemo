import { Component } from '@angular/core';
import { OnActivate, Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnActivate {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) { }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  getHeroes() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  routerOnActivate() {
    this.getHeroes();
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
