import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TourDetailsComponent } from './tour-details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: TourDetailsComponent }];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, IonicModule, TourDetailsComponent, RouterModule.forChild(routes)
  ]
})
export class TourDetailsModule { }
