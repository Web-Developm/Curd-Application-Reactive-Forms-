import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
//import { threadId } from 'node:worker_threads';

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

  data=new FormGroup({
    id!:new FormControl(''),
    name!:new FormControl(''),
    salary!:new FormControl(''),
    age!:new FormControl('')

  });

  /*id:any=new FormControl('');
  name:any=new FormControl('');
  salary:any=new FormControl('');
  age:any=new FormControl('');*/

  public data1: Array<{id:any,name:any,salary:any,age:any}>=[];

  click1=false; //enable

  reset()
  {
   this.data.reset();
  }

  //add
  add=():any =>{

    if(this.data1.findIndex((element:any) => element.id === this.data.controls['id']) ==-1)
    {
      this.data1.push({id:this.data.controls['id'], name:this.data.controls['name'], salary:this.data.controls['salary'], age:this.data.controls['age']});
      this.click1=this.click1; //enable
    }

    else{
      alert("Already used");
    }
    

  }

  click2=true;

  //update
  update1=(info:any,index:any):any =>
  {
    this.data.controls['id']=info.id;
    this.data.controls['name']=info.name;
    this.data.controls['salary']=info.salary;
    this.data.controls['age']=info.age;
    this.click1=!this.click1; //disable
    this.click2=!this.click2; //enable

  }

  

  update2=():void =>
  {
    let sample=this.data1.findIndex(up => up.id == this.data.controls['id']);

    this.data1[sample].name=this.data.controls['name'];
    this.data1[sample].salary=this.data.controls['salary'];
    this.data1[sample].age=this.data.controls['age'];

    this.click1=!this.click1; //enable
    this.click2=!this.click2; // disable

    


  }



  //delete

  del=(id:number):void=>
  {
    this.data1.splice(id,1);

  }

 
  

}
