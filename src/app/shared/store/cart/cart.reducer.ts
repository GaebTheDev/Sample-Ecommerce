import { createReducer, on } from "@ngrx/store";
import { Product } from "../../../models/Product";
import { decrementCartNumber, incrementCartNumber } from "./cart.action";

export interface CartState {
    count: number;
    products: Product[];
}

export const initialCartState: CartState = {
    count: 0,
    products: [],
}

export const cartReducer = createReducer(
    initialCartState,
    on(incrementCartNumber, (state)=>{
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(decrementCartNumber, (state)=>{
        return {
            ...state,
            count: state.count - 1
        }
    }),
)