import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart, updateCart } from "../shared/store/cart/cart.actions";
import { Cart } from "../models/Cart";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";

export const initialCart: Cart = new Cart([]);

export const cartReducer = createReducer(
    initialCart,
    on(addToCart, (state, action) => {
        let newCart;
        let newQuantity : number = action.quantity;
        newCart = state.products.filter(product => product.productId != action.productId);

        for (let i = 0; i < state.products.length; i++) {
            // If product is already in cart, add quantity instead
            if(state.products[i].productId == action.productId){
                newQuantity = state.products[i].quantity + action.quantity;
            }
        }
        
        const finalCart = new Cart([...newCart, {productId: action.productId, quantity: newQuantity}]);
        return finalCart;
    }),
    on(removeFromCart, (state, action) => {
        const newProductArray = state.products.filter((product, index) => state.products[index].productId != action.productId);
        return new Cart(newProductArray);
    }),
    on(updateCart, (state, action) => {
        let newCart;
        newCart = state.products.filter(product => product.productId != action.productId);
        
        const finalCart = new Cart([...newCart, {productId: action.productId, quantity: action.quantity}]);
        return finalCart;
    })
)