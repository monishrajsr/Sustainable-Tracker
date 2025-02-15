import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define a TypeScript interface for actions
interface SustainabilityAction {
  id: number;
  action: string;
  date: string;
  points: number;
}

@Component({
  selector: 'app-action-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent {
  @Input() actions: SustainabilityAction[] = [];  // Use the correct data type
  @Output() remove = new EventEmitter<number>();  // Emit ID when removing

  removeAction(id: number) {
    this.remove.emit(id);  // Emit the ID of the action to be removed
  }
}
