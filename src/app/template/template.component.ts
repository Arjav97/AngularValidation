import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  pass="";

  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log(f);
  }

}
