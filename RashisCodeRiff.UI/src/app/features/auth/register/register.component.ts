import { Component } from '@angular/core';
import { RegisterRequest } from '../models/register-request.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: RegisterRequest;

  constructor(private authService: AuthService, private router: Router) {
    this.model = {
      email: '',
      password: ''
    };
  }

  onFormSubmit(): void {
    this.authService.registerUser(this.model)
    .subscribe({
      next: () => {
        // Registration successful
        console.log('Registration successful!');
        // Redirect to login page
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        // Registration failed
        console.error('Registration failed:', error);
        // Handle error and display appropriate message to the user
      }
    });
  }
}
