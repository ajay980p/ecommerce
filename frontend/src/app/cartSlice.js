import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalProduct: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        addProduct: (state, action) => {

            let itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 1) {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            }
        },

        removeProduct: (state, action) => {



        }

    }
})


export default cartSlice.reducer;

export const { addProduct } = cartSlice.actions;