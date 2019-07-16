
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroo();
  }

  getHeroo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    this.heroService.getHero(id).subscribe(hero=>{
      console.log(hero.id);
      this.hero = hero;

    })
  }

  goBack(): void {
    this.location.back();
  }
}
