import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "../shared/store/cart/cart.actions";
import { Cart } from "../models/Cart";

export const initialCart: Cart = new Cart([]);

export const cartReducer = createReducer(
    initialCart,
    on(addToCart, (state, action) => {
        //if product Id already exists, add quantity instead
        const newCart = new Cart([...state.products, {productId: action.productId, quantity: action.quantity}]);
        // console.log(newCart);
        return newCart;
    }),
    on(removeFromCart, (state, action) => {
        const newProductArray = state.products.filter((product,index) => state.products[index].productId != action.productId);
        // console.log(newProductArray);
        return new Cart(newProductArray);
    }),
)