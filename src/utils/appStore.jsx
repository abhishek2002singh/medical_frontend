import {configureStore} from '@reduxjs/toolkit'

import userReducer  from './userSlice'
 import loginReducer from './loginSlice'
 import appointmentReducer from './appointmentSlice'




const appStore = configureStore({
    reducer :{
         
         
         
         user : userReducer,
       
        login: loginReducer,

        aptoken:appointmentReducer
         
        
    },

});

export default appStore