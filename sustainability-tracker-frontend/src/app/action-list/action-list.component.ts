import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
  imports: [CommonModule]
})
export class ActionListComponent {
  @Input() actions: string[] = []; // ✅ Accept actions list
  @Output() remove = new EventEmitter<number>(); // ✅ Emit index

  removeAction(index: number) {
    this.remove.emit(index); // ✅ Emit the index
  }
}
