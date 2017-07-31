import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public static eventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filterBy(value: string) {
    FormComponent.eventEmitter.emit(value);
  }
}
