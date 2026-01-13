import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FaqsComponent } from './faqs.component';
const routes: Routes = [{ path: '', component: FaqsComponent }];
@NgModule({
  imports: [CommonModule, IonicModule, FaqsComponent, RouterModule.forChild(routes)]
})
export class FaqsModule { }
