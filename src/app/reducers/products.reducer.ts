import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/Product";
import { addProducts } from "../shared/store/cart/product.actions";
import { ProductsService } from "../services/products.service";

export const initialProducts: Product[] = [];

export const productsReducer = createReducer(
    initialProducts,
    on(addProducts, (state, action) => {
        return action.products;
    })
);