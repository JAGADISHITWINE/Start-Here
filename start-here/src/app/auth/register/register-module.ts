import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register.component';


const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, IonicModule, RegisterComponent, RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
