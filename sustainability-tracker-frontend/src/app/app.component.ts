import { Component } from '@angular/core';
import { AddActionComponent } from './add-action/add-action.component';
import { ActionListComponent } from './action-list/action-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AddActionComponent, ActionListComponent]
})
export class AppComponent {
  actions: string[] = ['Recycle', 'Save Water'];

  addNewAction(action: string) {
    this.actions.push(action); // ✅ Add new action to list
  }

  removeAction(index: number) {
    this.actions.splice(index, 1);
  }
}
