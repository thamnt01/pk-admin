import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Output() dispatch = new EventEmitter<[string, any]>();

  onDispatch(action: string, data?: any) {
    this.dispatch.emit([action, data]);
  }
}
