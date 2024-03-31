import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "../shared/store/cart/cart.actions";

export const initialState = 0;

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state) => state + 1),
    on(removeFromCart, (state) => {
        if (state === 0) {
            return state;
        } else {
            return state - 1;
        }
    }),
)