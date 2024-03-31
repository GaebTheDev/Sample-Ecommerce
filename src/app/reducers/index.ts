import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { cartReducer } from './cart.reducer';
import { productsReducer } from './products.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cart: cartReducer,
  products: productsReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
