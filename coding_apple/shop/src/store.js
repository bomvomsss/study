import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    changeAge(state, a){
      state.age += a.payload
    }
  }
})
export let { changeName, changeAge } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      let num = state.findIndex((a)=>{ return a.id === action.payload })
      state[num].count++
    },
    // addItem(state, action){
    //   let item = state.
    //   state.push(item)
    // }
  }
})
export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
})
