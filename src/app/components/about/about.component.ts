import { Component } from '@angular/core';
import { RoutesModel } from 'src/app/common/blank/model/routes.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
title: string = "About Page";
sectionTitle: string = "About Section";
routes: RoutesModel[] = [
  {
    name: "Home",
    link: "/",
    class: ""
  },
  {
    name: "About",
    link: "/about",
    class: "active"
  }
];
}
