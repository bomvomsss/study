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
    addItem(state, action){
      let item = action.payload
      console.log(item.id)

      let chk = state.findIndex((i) => {
        return i.id === action.payload.id})
      if(chk > 0){
        state[chk].count++
      }else{
        return [...state, item]
      }
    },
    removeItem(state, action){
      let num = state.findIndex((a)=>{ return a.id === action.payload })
      state.splice(num, 1)
    }
  }
})
export let { addCount, addItem, removeItem } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
})
