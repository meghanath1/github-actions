import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'login',
    loadComponent:()=>import('../login/login').then(c=>c.Login)
  },
    {
    path:'register',
    loadComponent:()=>import('../register/register').then(c=>c.Register)
  },
      {
    path:'products',
    loadComponent:()=>import('../products/products').then(c=>c.Products)
  }
];
