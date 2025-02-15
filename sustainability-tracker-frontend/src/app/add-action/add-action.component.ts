import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css'],
  imports: [FormsModule]
})
export class AddActionComponent {
  action = '';

  @Output() actionAdded = new EventEmitter<string>(); // ✅ EventEmitter

  addAction() {
    if (this.action.trim()) {
      this.actionAdded.emit(this.action); // ✅ Emit event to parent
      this.action = ''; // Clear input
    }
  }
}
