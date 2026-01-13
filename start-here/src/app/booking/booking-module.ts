import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookingComponent } from './booking.component';

const routes: Routes = [{ path: '', component: BookingComponent }];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, IonicModule, BookingComponent, RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
