import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'about', loadComponent: () => import('./components/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'resume', loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent) },
];
