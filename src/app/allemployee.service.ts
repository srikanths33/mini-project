import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployeeService {

  constructor(private _httpclient:HttpClient) { }

  getallemployee():Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
  }

  getfilteremployee(term:string):Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
  }

  getsortemployee(column:string,order:string):Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
  }

 getpagedemployee(limit:number,page:number):Observable<any>{
  return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
 }

deleteemployee(id:string):Observable<any>{
  return this._httpclient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
}

createemployee(data:any):Observable<any>{
  return this._httpclient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
}

}

