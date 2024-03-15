import { configureStore } from '@reduxjs/toolkit'
import Panier from '../assets/Reducers/Panier'

const store = configureStore({
	reducer: {
        panier: Panier,
    },
    devTools:true
})

export default store;