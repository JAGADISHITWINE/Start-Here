import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [{ path: '', component: ToursComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule, ToursComponent, RouterModule.forChild(routes)
  ]
})
export class ToursModule { }
