import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  private loginForm = inject(FormBuilder)

  public form: FormGroup = this.createForm()

  private createForm(): FormGroup {
    return this.loginForm.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    console.log("tamo en vivo!!");
    this.resetForm()
  }

  resetForm(){
    this.form.reset()
  }

}