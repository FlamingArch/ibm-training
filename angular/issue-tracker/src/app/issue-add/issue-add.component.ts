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
import { Location } from '@angular/common';
import { v4 as UUID } from 'uuid';

@Component({
  selector: 'app-issue-add',
  standalone: true,
  imports: [
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
  ],
  templateUrl: './issue-add.component.html',
  styleUrl: './issue-add.component.scss',
})
export class IssueAddComponent {
  issueNo = UUID();
  title: string | null = null;
  description: string | null = null;
  priority: IssuePriority | null = null;
  type: IssueType | null = null;
  issues = [
    { value: IssueType.Feature, viewValue: 'Feature' },
    { value: IssueType.Bug, viewValue: 'Bug' },
    { value: IssueType.Documentation, viewValue: 'Documentation' },
  ];

  constructor(private _location: Location) {}

  submit() {
    if (this.title == null || this.title.trim() === '') {
      console.log('Missing Title');
    }
    if (this.description == null || this.description.trim() === '') {
      console.log('Missing Description');
    }
    if (this.priority == null) console.log('Select a Priority');
    if (this.type == null) console.log('Select a Issue Type');

    const item = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      type: this.type,
    } as Issue;

    console.log(item);
  }

  goBack() {
    this._location.back();
  }

  clearFields() {
    this.title = null;
    this.description = null;
    this.type = null;
    this.priority = null;
  }
}
