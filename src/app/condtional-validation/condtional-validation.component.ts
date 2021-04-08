import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-condtional-validation',
  templateUrl: './condtional-validation.component.html',
  styleUrls: ['./condtional-validation.component.css']
})
export class CondtionalValidationComponent implements OnInit {

  constructor() { }

  data=new FormGroup({
    user:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    cpassword:new FormControl('',[Validators.required]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      code:new FormControl('',[Validators.required])
    })
  })

  display()
  {
    console.log(this.data.value);
    this.data.reset();
  }

  validationIn(val:string){
return (this.data.controls.address as FormGroup).get(val)
  }


  ngOnInit(): void {
    this.validationIn('city')
  }

}
