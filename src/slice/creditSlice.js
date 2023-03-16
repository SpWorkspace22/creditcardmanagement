import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users : [],
  requests : [
            {
            req_id:1,
            name:"sonu prasad",
            card_type:"PREMIUM",
            dos:new Date().toUTCString(),
            rstatus:"OPEN"
          },
          {
            req_id:2,
            name:"Raju prasad",
            card_type:"PREMIUM",
            dos:new Date().toUTCString(),
            rstatus:"OPEN"
          }
  ],
  req_status:["OPEN","IN PROGRESS","KYC COMPLETED","CANCEL","OPEN"],
  bank_staff :{
    userid:"admin",
    password:"admin@123",
  },
  card_type : ["PREMIUM","GOLD"]
}

export const creditSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add_user_detail: (state) => {
      state.value += 1
    },
    update_user_detail: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_user_detail, update_user_detail,  } = creditSlice.actions

export default creditSlice.reducer