import { NgModule } from '@angular/core';
import { Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { 
    path: '', redirectTo:'main', pathMatch :'full'
  },
  { 
    path: 'main', component: LandingPageComponent 
  },
  { 
    path: 'aboutUs', component: AboutUsComponent 
  },
  { 
    path: 'contactUs', component: ContactUsComponent 
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
