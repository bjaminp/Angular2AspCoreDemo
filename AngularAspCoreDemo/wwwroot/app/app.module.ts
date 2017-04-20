import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
    declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }