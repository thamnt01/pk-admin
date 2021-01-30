import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-table-button',
  templateUrl: './action-table-button.component.html',
  styleUrls: ['./action-table-button.component.scss']
})
export class ActionTableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onView() { }
  onEdit() { }
  onDelete() { }

}
