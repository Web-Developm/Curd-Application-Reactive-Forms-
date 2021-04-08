import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-conditional-reactive',
  templateUrl: './conditional-reactive.component.html',
  styleUrls: ['./conditional-reactive.component.css']
})
export class ConditionalReactiveComponent implements OnInit {

  constructor() { }

  data = new FormGroup({
    member: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
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

  public store: Array<{ member: any; fname: any; lname: any; user: any; email: any; password: any; cpassword: any; date: any; gender: any; phone: any; address: any }> = [];

  add = (): any => {
    this.store.push({
      member: this.data.controls['member'].value,
      fname: this.data.controls['fname'].value,
      lname: this.data.controls['lname'].value,
      user: this.data.controls['user'].value,
      email: this.data.controls['email'].value,
      password: this.data.controls['password'].value,
      cpassword: this.data.controls['cpassword'].value,
      date: this.data.controls['date'].value,
      gender: this.data.controls['gender'].value,
      phone: this.data.controls['phone'].value,
      address: this.data.controls['address'].value
    });

    this.data.reset;
  }


  category = (): void => {
    let user = this.data.get('user');
    let phone = this.data.get('phone');
    let address = this.data.get('address');
  }



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

  onSubmit = (): void => {
    console.log(this.data.value);
  }






  ngOnInit(): void {
  }

}
