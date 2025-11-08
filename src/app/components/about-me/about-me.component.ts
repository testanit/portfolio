import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_IMPORTS } from '../../shared/primeng';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ...PRIMENG_IMPORTS],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  skillsForCarousel = [
    { icon: 'pi pi-code', label: 'C#' },
    { icon: 'pi pi-cog', label: '.NET' },
    { icon: 'pi pi-globe', label: 'Blazor' },
    { icon: 'pi pi-database', label: 'EF Core' },
    { icon: 'pi pi-file', label: 'Python' },
    { icon: 'pi pi-code', label: 'TypeScript' },
    { icon: 'pi pi-code', label: 'Angular' },
    { icon: 'pi pi-cloud', label: 'Azure' },
    { icon: 'pi pi-github', label: 'Git' },
    { icon: 'pi pi-briefcase', label: 'Docker' }
  ];

  carouselResponsive = [
    { breakpoint: '1024px', numVisible: 5, numScroll: 1 },
    { breakpoint: '768px', numVisible: 3, numScroll: 1 },
    { breakpoint: '560px', numVisible: 2, numScroll: 1 }
  ];

  carouselInterval = 2500;
}
