import { createSlice } from '@reduxjs/toolkit'

export const panier = createSlice({
  name: 'panier',
  initialState: {
    panier:[],
    id:''
     
  },
  reducers: {

    panierset: (state, action) => {
      state.panier.push(action.payload);
    //   ...state,
    //                   arr: state.arr.push([action.newItem])
    },
    panierremove: (state, action) => {
        state.panier.splice(action.payload,1)
    }

    // indexfind: (state ,action) => {
    //     state.is.indexOf(taches.indexOf('manger'))
    // }
  },
})

export const {panierset} = panier.actions

export default panier.reducer