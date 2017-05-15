import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {MovieService} from './MovieService';

@Component({
    moduleId: module.id,
    selector: 'theMovie',
    templateUrl: 'movie.component.html'
})
export class MovieComponent implements OnInit {
    id:string;
    movie:Object;

    constructor(private route: ActivatedRoute, 
                private service: MovieService,
                private location: Location) {
                    route.params.subscribe(params => {this.id = params['id'];});
                 }

    ngOnInit():void {
        this.service
        .getMovie(this.id)
        .subscribe((res:any)=> this.renderMovie(res));
     }

     back():void {
         this.location.back();
     }
     renderMovie(res:any):void {
         this.movie = res;
     }
}