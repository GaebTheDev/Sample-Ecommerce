import { createAction, props } from "@ngrx/store";


export const addToCart = createAction('[Cart Component] Add product',props<{productId: number, quantity: number}>());
export const removeFromCart = createAction('[Cart Component] Remove product', props<{productId: number}>());