import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuItem} from "primeng/api";
import {PanelMenuModule} from "primeng/panelmenu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelMenuModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Contact', icon: 'pi pi-user', routerLink: '/contact' },
          { label: 'About me', icon: 'pi pi-table', routerLink: '/about' },
          { label: 'Portfolio', icon: 'pi pi-chart-bar', routerLink: '/portfolio' },
          { label: 'Resume', icon: 'pi pi-pencil', routerLink: '/resume' },
    ];
  }}
