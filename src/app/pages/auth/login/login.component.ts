import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
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
      
      // Aquí puedes agregar tu lógica de validación real
      if (email === 'test@test.com' && password === '123456') {
        // Guardar datos en localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Navegar al layout
        this.router.navigate(['/components/layout']); // Ajusta la ruta según tu configuración
      } else {
        alert('Credenciales incorrectas');
        this.resetForm();
      }
    }
  }

  // ... resto del código existente ...
}