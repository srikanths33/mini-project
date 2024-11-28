import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginservice:LoginService,private _router:Router){}

  public loginform:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  login(){
    console.log(this.loginform);
    this._loginservice.getlogin(this.loginform.value).subscribe(
      (data:any)=>{
        alert("Login succefull!!")
        // go to dashboard
        this._router.navigateByUrl("/dashboard");
        // store token
        sessionStorage.setItem('token',data.token);
      },
      (err:any)=>{
        alert("Invalid credentials")
      }
    )
  }

}
