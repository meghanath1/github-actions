import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    private loginService = inject(LoginService);

  loginForm!:FormGroup;
    constructor(private fb: FormBuilder){
  this.loginForm = this.fb.group({
    mobileNumber:['',[Validators.required,]],
    password:['',[Validators.required, Validators.minLength(6)]]
  });
    }



  onSubmit(){

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
let data = {
    "mobileNumber":this.loginForm.value.mobileNumber,
    "password":this.loginForm.value.password,
}
this.loginService.login(data).subscribe({
  next:(res)=>{
    {
  console.log(res);

  localStorage.setItem("authorization",res.token);

}
  }
})
  }
}
