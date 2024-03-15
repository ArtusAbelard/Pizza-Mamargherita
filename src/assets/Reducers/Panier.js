import { createSlice } from '@reduxjs/toolkit'

export const panier = createSlice({
  name: 'panier',
  initialState: {
    panier:[],
    prix:[],
    id:''  
  },
  reducers: {

    panierset: (state, action) => {
      state.panier.push(action.payload);
    },
    panierremove: (state, action) => {
        state.panier.splice(action.payload,1)
    },
    prixset: (state,action) => {
      state.prix.push(action.payload)
    },
    prixremove: (state,action) => {
      state.prix.splice(action.payload,1)
    }
  },
})

export const {panierset,panierremove,prixset,prixremove} = panier.actions
export default panier.reducer