import { Component } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { RoutesModel } from 'src/app/common/blank/model/routes.model';
import { increment } from 'src/app/states/basket/basket.actions';
import { incrementOrder } from 'src/app/states/order/order.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "Home Page";
  sectionTitle: string = "Home Section";
  routes: RoutesModel[] = [
    {
      name: "Home",
      class: "active",
      link : "/"
    }
  ];

  btnName: string = "Save";
  inputs: {label: string, value: string, name: string, validations: string}[] = [
    {
      label: "First Name",
      value: "",
      name:"firstName",
      validations: "required minLenght='3'"
    },
    {
      label: "Last Name",
      value: "",
      name:"lastName",
      validations: "required minLenght='3'"
    },
    {
      label: "Email",
      value: "",
      name:"email",
      validations: "required minLenght='3'"
    },
    {
      label: "Phone Number",
      value: "",
      name:"phoneNumber",
      validations: "required minLenght='3'"
    },
    {
      label: "Password",
      value: "",
      name:"password",
      validations: "required minLenght='3'"
    },
  ]

  constructor(
    private store: Store<
    {
      basketCount: number, 
      orderCount: number
    }>,    
  ){}

  get(event: any){
  console.log(event); 
  }

  get2(event: any){
    console.log(event); 
    }

    addBasket(){
      this.store.dispatch(increment());
    }

    addOrder(){
      this.store.dispatch(incrementOrder())
    }
}
