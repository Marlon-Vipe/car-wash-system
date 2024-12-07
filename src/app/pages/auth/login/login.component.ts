import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  private alertService = inject(AlertService)
  private loginForm = inject(FormBuilder)
  private router = inject(Router);

  public form: FormGroup = this.createForm()

  private createForm(): FormGroup {
    return this.loginForm.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  resetForm(){
    this.form.reset()
  }
  
  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      
      // Validación de credenciales
      if (email === 'test@test.com' && password === '123456') {
        // Guardar datos en localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Mostrar alerta de éxito y navegar
        this.alertService.succesAlert().then((res) => {
          if (res.isConfirmed) {
            this.router.navigate(['/components/layout']);
          }
        });
      } else {
        // Mostrar alerta de error y resetear el formulario
        this.alertService.errorAlert("Error", "Credenciales inválidas");
        this.resetForm();
      }
    }
  }

  // ... resto del código existente ...
}