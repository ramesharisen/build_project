import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    // name =new FormControl('');
  empForm = new FormGroup({
  FirstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
  LastName:new FormControl(''),
  
    Street: new FormControl(''),
    City: new FormControl(''),
    Zipcode: new FormControl(''),
    State: new FormControl(''),

   
});
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
