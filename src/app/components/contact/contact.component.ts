import { Component } from '@angular/core';
import { RoutesModel } from 'src/app/common/blank/model/routes.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
title: string = "Contact Page";
sectionTitle: string = "Contact Section";
routes: RoutesModel[] = [
  {
    name: "Home",
    link: "/",
    class: "",
  },
  {
    name: "Contact",
    link: "/contact",
    class: "active"
  }
]
}
