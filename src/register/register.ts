import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private loginService = inject(LoginService);
  registerForm!:FormGroup;
  constructor(private fb: FormBuilder){

this.registerForm = this.fb.group({

    name:['',Validators.required],
    mobileNumber:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',Validators.required],
    role:['ADMIN']
});

  }

onSubmit(){

if(this.registerForm.valid){
console.log(this.registerForm.value);
}
let data = {
    "mobileNumber":this.registerForm.value.mobileNumber,
    "name":this.registerForm.value.name,
    "password":this.registerForm.value.password,
}
this.loginService.register(data).subscribe((res)=>{
  alert(res);
})
}
}
