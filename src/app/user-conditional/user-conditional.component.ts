import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-conditional',
  templateUrl: './user-conditional.component.html',
  styleUrls: ['./user-conditional.component.css']
})
export class UserConditionalComponent implements OnInit {

  form!:FormGroup;
  formSubmitted=false;


  constructor(private fb:FormBuilder) {

   }

   bulidForm()
   {
     this.form=this.fb.group({
       email:['',[Validators.required]],
       username:['',[Validators.required]],
       userCategory:['employee'],
       institution:['',[]],
       company:['',[Validators.required]],
       salary:['',Validators.required]
     });
   }

   onSubmit(event:any)
   {
     event.preventDefault();
     this.formSubmitted=true;

     if(this.form.valid)
     {
       console.log(this.form.value);
     }
   }

   display()
   {
     console.log(this.form.value);
   }

   setValidation()
   {
     const institutionControl=this.form.get('institution');
     const companyControl=this.form.get('company');
     const salaryControl=this.form.get('salary');

     this.form.get ('userCategory')?.valueChanges.subscribe(
       userCategory =>{

        if(userCategory=== 'student')
        {
          institutionControl?.setValidators([Validators.required]);
          companyControl?.setValidators(null);
          salaryControl?.setValidators(null);
        }

        if(userCategory === 'employee')
        {
          institutionControl?.setValidators(null);
          companyControl?.setValidators([Validators.required]);
          salaryControl?.setValidators([Validators.required]);
        }
 
        institutionControl?.updateValueAndValidity();
        companyControl?.updateValueAndValidity();
        salaryControl?.updateValueAndValidity();

       });
   }



  ngOnInit(): void {
    this.bulidForm();
    this.setValidation();
  }

}
