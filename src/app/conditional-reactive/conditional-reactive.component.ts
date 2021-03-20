import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditional-reactive',
  templateUrl: './conditional-reactive.component.html',
  styleUrls: ['./conditional-reactive.component.css']
})
export class ConditionalReactiveComponent implements OnInit {

  constructor() { }

  data = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cpassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  match = (): any => {
    if (this.data.controls['password'].value == this.data.controls['cpassword'].value) {
      console.log('Password Matched');
    }

    else {
      console.log("Password didn't Matched");
    }
  }

  reset = (): void => {
    this.data.value({
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
      date: "",
      gender: "",
      phone: "",
      address: ""
    })
  }

  match1 = (): any => {
    if (this.data.controls['password'].value == this.data.controls['cpassword'].value) {
      alert('Password Matched');

    }

    else {
      alert("Password didn't Matched");
    }


  }

  onSubmit=():void =>{
    console.log(this.data.value);
  }






  ngOnInit(): void {
  }

}
