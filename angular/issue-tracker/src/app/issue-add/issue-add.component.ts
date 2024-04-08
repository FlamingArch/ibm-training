import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Issue, IssuePriority, IssueType } from '../types';
import { v4 as UUID } from 'uuid';

@Component({
  selector: 'app-issue-add',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
  ],
  templateUrl: './issue-add.component.html',
  styleUrl: './issue-add.component.scss',
})
export class IssueAddComponent {
  newIssue: Issue = {
    issueNo: UUID(),
    type: IssueType.Bug,
    title: '',
    description: '',
    priority: IssuePriority.High,
  };
  issues = [
    { value: IssueType.Feature, viewValue: 'Feature' },
    { value: IssueType.Bug, viewValue: 'Bug' },
    { value: IssueType.Documentation, viewValue: 'Documentation' },
  ];
  submit() {
    console.log(this.newIssue);
  }
}
