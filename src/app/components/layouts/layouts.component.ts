import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
basketCount: number = 0;
orderCount$: Observable<number>;

constructor(
  private store: Store<{basketCount: number, orderCount: number}>,  
){
  this.store.select("basketCount").subscribe(res=>{
    this.basketCount = res;
  })

  this.orderCount$ = this.store.select("orderCount");
}
}
