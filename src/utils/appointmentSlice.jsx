import { createSlice } from "@reduxjs/toolkit";

 const appointmentSlice = createSlice({
    name:"apoint",
    initialState:null,
    reducers:{
        addAppointment :  (state , action) =>{
            return action.payload
        },
        removeAppointment :(state , action)=>{
            return null
        }
    }

})

export const {addAppointment , removeAppointment} = appointmentSlice.actions

export default appointmentSlice.reducer
