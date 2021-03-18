import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
//import { threadId } from 'node:worker_threads';
//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  today:number=Date.now(); // Date

 /* public id!: any;
  public name!: any;
  public salary!: any;
  public age!: any;*/

  sample=new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    salary: new FormControl(''),
    age: new FormControl(''),

  })

  
   

  



  public data: Array<{ id: number; name: string; salary: number; age: number; }> = [];

  click1 = false; //enable

  add = (): void => {

    let c = confirm('stored in table records?');

      this.data.push({
        id:this.sample.controls['id'].value,
        name: this.sample.controls['name'].value,
        salary: this.sample.controls['salary'].value,
        age: this.sample.controls['age'].value,
      });
      
      this.click1 = this.click1; //enable
      this.reset();
      
    

  }

  //Reset fields
  reset() {

    this.sample.setValue({
      id:"",
      name:"",
      salary:"",
      age:""
    })
    
  }


  //Update table record
  click2 = true; // disable

  update1 = (info: any, index: any):any => {



    /*this.sample.controls['id'].get=info.id;
    this.sample.controls['name'].get=info.name;
    this.sample.controls['salary'].get=info.salary;
    this.sample.controls['age'].get=info.age;*/

    /*info.id=this.sample.controls['id'];
    info.name=this.sample.controls['name'];
    info.salary=this.sample.controls['salary'];
    info.age=this.sample.controls['age'];*/

    this.sample.setValue({
      id:info.id,
      name: info.name,    
      salary:info.salary,
      age:info.age
    });


    
    
    this.click2 = !this.click2; //enabled
    this.click1 = !this.click1; //disabled
  };

  update2 = (): any => {
  
      let objIndex = this.data.findIndex((obj) => obj.id === this.sample.controls['id'].value);
      this.data[objIndex].name= this.sample.controls['name'].value;
      this.data[objIndex].salary= this.sample.controls['salary'].value;
      this.data[objIndex].age = this.sample.controls['age'].value;
      //this.reset();
      this.click1 = !this.click1; //enabled
      this.click2 = !this.click2; //disabled
      //this.click1 = this.click1;
      this.reset();


  };

  //Delete the table records
  del = (id: number) => {
    let r = confirm('Are you sure delete the item');
    if (r == true) {
      this.data.splice(id, 1);
      alert('Successfully deleted');
    } else {
      alert('We stopped the delete');
    }
  };

  

}
