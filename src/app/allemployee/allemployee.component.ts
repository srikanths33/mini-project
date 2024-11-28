import { Component } from '@angular/core';
import { AllemployeeService } from '../allemployee.service';

@Component({
  selector: 'app-allemployee',
  templateUrl: './allemployee.component.html',
  styleUrls: ['./allemployee.component.css']
})
export class AllemployeeComponent {
  employees: any = [];
  term:string = "";

  column:string="";
  order:string="";

  limit:number=0;
  page:number=0;
  constructor(private _allemployee:AllemployeeService){
    _allemployee.getallemployee().subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal server error")
      })
  }

  filter(){
    this._allemployee.getfilteremployee(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal server error");
      })
    }

    sort(){
      this._allemployee.getsortemployee(this.column,this.order).subscribe(
        (data:any)=>{
          this.employees=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    Pagination(){
      this._allemployee.getpagedemployee(this.limit,this.page).subscribe(
        (data:any)=>{
          this.employees=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    delete(id:string){
      this._allemployee.deleteemployee(id).subscribe(
        (data:any)=>{
          alert("deleted succesfully!!!");
          location.reload();
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    


}
