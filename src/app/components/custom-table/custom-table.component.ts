import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() element: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  editElement(element: any) {
    this.edit.emit(element);
  }

  deleteElement(element: any) {
    this.delete.emit(element);
  }
}
