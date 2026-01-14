import { BlogDetailModule } from './blog-detail/blog-detail-module';
import { BlogModule } from './blog/blog-module';
import { FaqsModule } from './faqs/faqs-module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './layout/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard-module').then(m => m.DashboardModule)
      },
      {
        path: 'upcomingtours',
        loadChildren: () =>
          import('./upcomingtours/tours-module').then(m => m.ToursModule)
      },
      {
        path: 'tour-details',
        loadChildren: () =>
          import('./tour-details/tour-details-module').then(m => m.TourDetailsModule)
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking-module').then(m => m.BookingModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about-module').then(m => m.AboutModule)
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./faqs/faqs-module').then(m => m.FaqsModule)
      },
      {
        path: 'auth/login',
        loadChildren: () =>
          import('./auth/login/login-module').then(m => m.LoginModule)
      },
      {
        path: 'auth/register',
        loadChildren: () =>
          import('./auth/register/register-module').then(m => m.RegisterModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog-module').then(m => m.BlogModule)
      },
      {
        path: 'blog-details',
        loadChildren: () =>
          import('./blog-detail/blog-detail-module').then(m => m.BlogDetailModule)
      }
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
