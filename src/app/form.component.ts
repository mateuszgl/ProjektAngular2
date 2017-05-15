import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'search-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
  
   public form = new FormGroup({
        query: new FormControl("",[Validators.required, this.queryValidator])
});

   @Output()
   sendQuery = new EventEmitter();

   @Output()
   cleanResults = new EventEmitter();

   submit(){
       this.sendQuery.emit(this.form.value.query);
   }

   clean(){
       console.log("cleaning...");
       this.cleanResults.emit();
   }

   ngOnInit(){
      this.form.valueChanges
      .do(_ => {
          if(!this.form.valid)this.clean()
      })
      .filter(_ => this.form.valid)
      .debounceTime(500)
      .subscribe(_ => this.submit());
   }

    queryValidator(control: FormControl) {
        let str = "cat"; 
        
        if(!control.value.match(str)){
            return null;
        } else {
            return { 'invalidQuery': true };
        }
    }
}