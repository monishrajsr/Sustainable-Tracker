import { Component } from '@angular/core';
import { AddActionComponent } from './add-action/add-action.component';
import { ActionListComponent } from './action-list/action-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the SustainabilityAction interface
interface SustainabilityAction {
  id: number;
  action: string;
  date: string;
  points: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddActionComponent, ActionListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions: SustainabilityAction[] = [];

  addAction(action: SustainabilityAction) {
    console.log('Adding action:', action); // Debugging log
    this.actions.push(action);
  }

  removeAction(id: number) {
    this.actions = this.actions.filter(action => action.id !== id);
  }
}