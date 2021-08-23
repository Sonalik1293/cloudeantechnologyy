import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  public loginError:String;
  
  constructor(
    private fb: FormBuilder,
    private route: Router)
     { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[ Validators.required]]
  })
  }

  get getControl() { return this.loginForm.controls; }

  onFormSubmit(){  
      if(this.loginForm.valid){
        localStorage.setItem ("email",this.getControl.email.value)
        localStorage.setItem ("password",this.getControl.password.value)
        this.route.navigate(['dashboard'])

      
      }    
    }
}

    
 
    

  

  
  
  
  


