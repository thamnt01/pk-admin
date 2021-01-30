import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dispatch(action: string) {
    console.log(action);

  }

}
