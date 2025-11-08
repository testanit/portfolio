import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'portfolio', loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'resume', loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent) },
];
