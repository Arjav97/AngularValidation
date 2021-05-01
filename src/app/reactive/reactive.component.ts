import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup , FormControl } from '@angular/forms';
import  { equalityCheckValidator } from '../shared/equalityCheckValidator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{

   profile: FormGroup;
   firstname : FormControl;
   lastname : FormControl;
   address : FormGroup;
   street: FormControl;
   city : FormControl;
   state: FormControl;
   zip: FormControl

  
  constructor() {}

  ngOnInit(){
    this.firstname = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    this.lastname = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    this.street = new FormControl('',Validators.required);
    this.city = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    this.state = new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]);
    this.zip = new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('[0-9]*')]);

    this.profile = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      address : new FormGroup({
        street: this.street,
        city: this.city,
        state: this.state,
        zip: this.zip
      })
    },{ validators: equalityCheckValidator })
  }

  submit(){
    console.log(this.profile);
  }
}
