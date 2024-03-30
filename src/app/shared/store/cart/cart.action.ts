import { createAction } from "@ngrx/store";

export const addToCart = createAction('[Cart Component] add Product');
export const removeFromCart = createAction('[Cart Component] remove Product');
export const incrementCartNumber = createAction('[Cart Component] increment Cart Number')
export const decrementCartNumber = createAction('[Cart Component] decrement Cart Number')