import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuItem} from "primeng/api";
import {NgOptimizedImage} from '@angular/common';
import { PRIMENG_IMPORTS } from './shared/primeng';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ...PRIMENG_IMPORTS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'About me', icon: 'pi pi-table', routerLink: '/about' },

      { label: 'Contact', icon: 'pi pi-user', routerLink: '/contact' },
          { label: 'Portfolio', icon: 'pi pi-chart-bar', routerLink: '/portfolio' },
          { label: 'Resume', icon: 'pi pi-pencil', routerLink: '/resume' },
    ];
  }}
