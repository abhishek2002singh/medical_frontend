import {configureStore} from '@reduxjs/toolkit'

import userReducer  from './userSlice'
 import loginReducer from './loginSlice'
 import appointmentReducer from './appointmentSlice'
 import doctorReducer from './doctorSlice'
 import patientReducer from './patientSlice'




const appStore = configureStore({
    reducer :{
         
         
         
         user : userReducer,
       
        login: loginReducer,

        aptoken:appointmentReducer,
        doctor: doctorReducer,
        patient : patientReducer,
         
        
    },

});

export default appStore