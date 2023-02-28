import { Component, Input } from '@angular/core';
import { RoutesModel } from './model/routes.model';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  @Input() title: string = "";
  @Input() routes: RoutesModel[] = [];  
}
