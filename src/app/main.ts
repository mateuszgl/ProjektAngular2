import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import { SearchComponent } from './search.component';
import { MovieComponent } from './movie.component';
import { ResultsComponent }   from './results.component';
import { FormComponent } from './form.component'

import {MOVIE_PROVIDERS} from './MovieService';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
  
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes),NgbModule.forRoot(),FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [AppComponent,SearchComponent, MovieComponent, ResultsComponent, FormComponent],
    providers: [
        MOVIE_PROVIDERS,
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
