import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timeline } from 'primeng/timeline';
import { SharedModule } from 'primeng/api';
import { WorkItem } from '../../shared/model/work-item';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    Timeline
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  events: WorkItem[];

  constructor() {
    this.events = [
      {
        status: 'Senior Software Developer',
        date: 'Apr 2023 – Present',
        company: 'Novagraaf Group B.V. | Amsterdam, Netherlands',
        icon: 'pi pi-briefcase',
        color: '#4CAF50',
        details: [
          'Led internal .NET and data integration projects with Azure DevOps CI/CD pipelines.',
          'Built a Blazor .NET Core solution automating XML generation for IP renewals (–70% manual work).',
          'Maintained Python-based service integrating with third-party APIs for hourly data updates.',
          'Developed .NET Framework import/export tools optimizing data flow.',
          'Implemented mailbox triage automation for failure notifications.',
          'Created SSRS and Excel reports with real-time management insights.',
          'Promoted process automation and quality standards across IT department.'
        ]
      },
      {
        status: 'Senior Full Stack Developer',
        date: 'Apr 2022 – Apr 2023',
        company: 'NOV GustoMSC (NOV) | Rotterdam, Netherlands',
        icon: 'pi pi-code',
        color: '#2196F3',
        details: [
          'Developed Angular and Node.js apps deployed with Docker on AWS.',
          'Drove Agile Scrum adoption, introducing story-based planning.',
          'Collaborated on architecture for scalable, maintainable delivery.'
        ]
      },
      {
        status: 'Software Developer – Freelancer',
        date: 'Jun 2021 – Mar 2022',
        company: 'Spinpanel (now part of N-able) | Remote (Belgrade, Serbia)',
        icon: 'pi pi-desktop',
        color: '#9C27B0',
        details: [
          'Built .NET Core + Angular microservices and micro-frontends for SaaS management.',
          'Designed reusable frontend components for consistent UX.',
          'Improved build/release processes using Azure Pipelines and Git strategy.'
        ]
      },
      {
        status: 'Software Developer – Freelancer',
        date: 'Sep 2020 – Jun 2021',
        company: 'NCR Corporation | Remote (Belgrade, Serbia)',
        icon: 'pi pi-globe',
        color: '#FF9800',
        details: [
          'Developed IoT device monitoring web components (ThingWorx, Angular, .NET Core).',
          'Implemented NgRx for robust state management.',
          'Collaborated across time zones on estimation and delivery.'
        ]
      },
      {
        status: 'Junior Full Stack Developer',
        date: 'Jun 2019 – Aug 2020',
        company: 'Smartwave | Belgrade, Serbia',
        icon: 'pi pi-cog',
        color: '#3F51B5',
        details: [
          'Built enterprise Angular + .NET Core solutions using CQS and Repository patterns.',
          'Automated job scheduling with Quartz.NET.'
        ]
      },
      {
        status: 'Junior Backend Developer',
        date: 'Feb 2017 – May 2019',
        company: 'Saga | Belgrade, Serbia',
        icon: 'pi pi-database',
        color: '#607D8B',
        details: [
          'Developed MDA-based .NET web solutions using MS SQL and DB2.',
          'Created REST APIs, data migration scripts, and optimized SQL procedures.'
        ]
      }
    ];
  }

}
