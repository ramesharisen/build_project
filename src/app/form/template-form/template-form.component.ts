import { Component, OnInit } from '@angular/core';
import {TemplateForm}from '../template-form';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  tempform =new TemplateForm();
  submitted=false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
  }
}
