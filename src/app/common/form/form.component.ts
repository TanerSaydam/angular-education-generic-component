import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
@Input() inputs: {
  label: string, 
  value: string,
  name: string,
  validations: string;
}[] = [];
@Input() btnName: string = "";

@Output() sendEvent = new EventEmitter<any>();

send(form:NgForm){
  this.sendEvent.emit(form.value);
}
}
