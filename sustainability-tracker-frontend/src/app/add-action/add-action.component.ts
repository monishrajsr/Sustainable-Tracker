import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define interface for new action
interface SustainabilityAction {
  id: number;
  action: string;
  date: string;
  points: number;
}

@Component({
  selector: 'app-add-action',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {
  action: string = '';
  date: string = '';
  points: number | null = null;

  @Output() add = new EventEmitter<SustainabilityAction>();

  addAction() {
    if (!this.action || !this.date || this.points === null) return;
  
    const newAction: SustainabilityAction = {
      id: Math.floor(Math.random() * 1000),
      action: this.action,
      date: this.date,
      points: this.points
    };
  
    console.log('Emitting Action:', newAction); // Debugging log
  
    this.add.emit(newAction);
    this.action = '';
    this.date = '';
    this.points = null;
  }
  
}
