import  { createContext, useReducer } from 'react'

function authReducer(state, action){
    switch(action.type){
        case 'Login':
            return {...state, isConnected: true, data: action.payload.data}

        default:
            return state
    }
}


export const AuthContext = createContext()



export function AuthProvider({children}){

const [state, dispatch] = useReducer(authReducer , {
        isConnected : false,
        metamask : null

    })

const userLogin = (data) =>{
    console.log("auth context: ", metamask)
    dispatch({
        type: "Login",
        payload: {data}
    })
}
  


    return(
    <AuthContext.Provider value={{...state, userLogin}}>
        {children}
    </AuthContext.Provider>
)}