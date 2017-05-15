import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from './MovieService';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    query: string;
    results: Object;

    constructor(private service: MovieService,
                private router: Router,
                private route: ActivatedRoute) {
                    this.route.queryParams
                    .subscribe(params => {this.query = params['query'] || '';});
                 }

    search(): void {
        if(!this.query){
            return;
        }
        this.service.search(this.query)
        .subscribe((res:any) => this.renderResults(res));
    }

    renderResults(res:any):void{
        if(res && res.Response){
            this.results = res;
            //console.log(res.Search);
            
            res.Search.forEach((element:any) => {
                this.service.checkPoster(element.Poster).subscribe((res:any) => {
                    //console.log(res.status);
                },
                (res:any)=>{
                   if(res.status != 200){
                        this.changePoster(element);
                    }
                } );
            });
        }
    }

    changePoster(element:any){
        element.Poster="N/A";
    }
    ngOnInit():void {
        this.search();
     }

     submit(query: string): void {
         this.router.navigate(['search'], {queryParams: {query: query}})
         .then(_ => this.search());
     }

     clean(){
         this.results = null;
     }
}