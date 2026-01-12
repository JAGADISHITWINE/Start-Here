import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [CommonModule, IonicModule, DashboardComponent, RouterModule.forChild(routes)]
})
export class DashboardModule { }
