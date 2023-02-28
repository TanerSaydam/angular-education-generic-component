import { createAction, createReducer, on } from "@ngrx/store";
import { incrementOrder } from "./order.actions";

export const orderCount: number = 0;

export const orderReducer = createReducer(
    orderCount,
    on(incrementOrder, (state) => state + 1)
)