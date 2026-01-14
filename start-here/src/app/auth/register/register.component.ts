import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class RegisterComponent implements OnInit {

  ngOnInit() { }

  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  showPassword = false;
  showConfirmPassword = false;
  agreeToTerms = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  async register() {
    // Validation
    if (!this.user.name || !this.user.email || !this.user.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all required fields',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (!this.agreeToTerms) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please agree to Terms & Conditions',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Implement actual registration logic
    console.log('Register:', this.user);

    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Account created successfully!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/user/dashboard']);
        }
      }]
    });
    await alert.present();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}
