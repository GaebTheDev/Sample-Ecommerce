import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "../shared/store/cart/cart.actions";
import { Cart } from "../models/Cart";
import { faI } from "@fortawesome/free-solid-svg-icons";

export const initialCart: Cart = new Cart([]);

export const cartReducer = createReducer(
    initialCart,
    on(addToCart, (state, action) => {
        let newCart;
        newCart = state.products.filter(product => product.productId != action.productId );

        const finalCart = new Cart([...newCart, {productId: action.productId, quantity: action.quantity}]);
        console.log(finalCart);
        return finalCart;
    }),
    on(removeFromCart, (state, action) => {
        const newProductArray = state.products.filter((product, index) => state.products[index].productId != action.productId);
        
        return new Cart(newProductArray);
    }),
)