import { createAction, createReducer, on } from "@ngrx/store";
import { of } from "rxjs";
import { increment } from "./basket.actions";

export const initialState: number = 0;

export const basketReducer = createReducer(
    initialState,
    on(createAction("sadasd"), (state)=> state +1),
    on(increment, (state)=> {
        //işlemler



        return state + 1;
    })
)