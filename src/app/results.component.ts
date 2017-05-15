import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from './MovieService';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'results-list',
    templateUrl: 'results.component.html'
})
export class ResultsComponent implements OnInit {
    constructor(private service: MovieService, private http: Http) { }
    
    @Input()
    results: Object;

    ngOnInit() { 
    }

}