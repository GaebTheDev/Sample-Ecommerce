import { createAction, props } from "@ngrx/store";
import { Product } from "../../../models/Product";


// export const addToCart = createAction('[Cart Component] Add product',props<{productId: number, quantity: number}>());
// export const removeFromCart = createAction('[Cart Component] Remove product', props<{productId: number}>());

export const getProducts = createAction('[Product Component] get Product List');

//not using HTTP API for now
export const addProducts = createAction('[Product Component] add Products', props<{products : Product[]}>())