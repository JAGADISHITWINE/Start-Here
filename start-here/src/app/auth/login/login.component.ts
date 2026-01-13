import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginComponent  implements OnInit {


  ngOnInit() {}
    credentials = {
    email: '',
    password: ''
  };

  showPassword = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (!this.credentials.email || !this.credentials.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all fields',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Implement actual login logic here
    console.log('Login:', this.credentials);

    // Navigate to dashboard
    this.router.navigate(['/user/dashboard']);
  }

  async loginWithGoogle() {
    console.log('Login with Google');
    // Implement Google OAuth
  }

  async loginWithFacebook() {
    console.log('Login with Facebook');
    // Implement Facebook OAuth
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
