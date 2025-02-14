import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name:"Patient",
    initialState:null,
    reducers:{
        addPatient :  (state , action) =>{
            return action.payload
        },
        removePatient :(state , action)=>{
            return null
        }
    }

})

export const {addPatient , removePatient} = patientSlice.actions

export default patientSlice.reducer