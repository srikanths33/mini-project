import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AllemployeeService } from '../allemployee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {

  

public employeeform:FormGroup=new FormGroup(
  {
    id: new FormControl(),
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl()
    }),
    workMode: new FormControl(),
    gender: new FormControl(),
    hikes: new FormArray([]),

})

get hikesFormArray(){
  return this.employeeform.get('hikes') as FormArray;
}

addhike(){
  this.hikesFormArray.push(
    new FormGroup({
      year:new FormControl(),
      percentage:new FormControl(),
    })
  )
}

deletecard(i:number){
  this.hikesFormArray.removeAt(i);
}

submit(){
  console.log(this.employeeform);
  this._cretaeemployee.createemployee(this.employeeform.value).subscribe(
    (data:any)=>{
      alert("created succesfully")
    },
    (err:any)=>{
      alert("creation failed");
    })
 }

constructor(private _cretaeemployee:AllemployeeService){
  this.employeeform.get('workMode')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='WorkFromOffice'){
        this.employeeform.addControl('travelfee',new FormControl());
        this.employeeform.removeControl('wifibill');
      }
      else{
        this.employeeform.addControl('wifibill',new FormControl());
        this.employeeform.removeControl('travelfee');
      }
    })
  }

  
}


