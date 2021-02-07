import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'action-table-button',
  templateUrl: './action-table-button.component.html',
  styleUrls: ['./action-table-button.component.scss']
})
export class ActionTableButtonComponent {

  @Input() allows = ['view', 'edit', 'delete']
  @Output() dispatch = new EventEmitter<string>();
  constructor() { }

  onDispatch(action: string) {
    this.dispatch.emit(action);
  }

}
