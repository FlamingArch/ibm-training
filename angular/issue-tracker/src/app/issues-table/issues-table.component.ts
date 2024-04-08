import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { Issue, IssueType, IssuePriority } from '../types';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

let issueData: Issue[] = [
  {
    issueNo: 1,
    type: IssueType.Bug,
    title: 'Sample Issue',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto hic quos quia, vero ullam ipsam enim quam ducimus debitis.',
    priority: IssuePriority.High,
  },
];

@Component({
  selector: 'app-issues-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatToolbar,
  ],
  templateUrl: './issues-table.component.html',
  styleUrl: './issues-table.component.scss',
})
export class IssuesTableComponent {
  displayedColumns: string[] = [
    'issueNo',
    'type',
    'title',
    'description',
    'priority',
  ];
  issues = issueData;
  openDialog(): void {}
}
