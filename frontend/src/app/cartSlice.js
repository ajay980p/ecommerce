import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotal: 0
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        addProduct: (state, action) => {

            let itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                // localStorage.setItem("cart", JSON.stringify(state.cartItems))
            }
        },

        // removeProduct: (state, action) => {
        // },

        updateQuantity: (state, action) => {
            console.log(action.payload)
            if (action.payload === 'inc') {

            }
        },

        cartTotalPrice: (state) => {

            let { cartQuantity, price } = state.cartItems.reduce(
                (cartTotal)


            )
        }
    }
})


export default cartSlice.reducer;

export const { addProduct, updateQuantity } = cartSlice.actions;