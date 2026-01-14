import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BlogDetailComponent } from './blog-detail.component';

const routes: Routes = [{ path: '', component: BlogDetailComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule, BlogDetailComponent, RouterModule.forChild(routes)
  ]
})
export class BlogDetailModule { }
