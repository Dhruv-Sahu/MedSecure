import  { createContext, useReducer } from 'react'

function web3Reducer(state, action){
    switch(action.type){
        case 'Metamask':
            return {...state, isConnected: true, metamask: action.payload.metamask}

        default:
            return state
    }
}


export const Web3Context = createContext()



export function Web3Provider({children}){

const [state, dispatch] = useReducer(web3Reducer , {
        isConnected : false,
        metamask : null

    })

const userMetamask = (metamask) =>{
    console.log("metamask context: ", metamask)
    dispatch({
        type: "Metamask",
        payload: {metamask}
    })
}
  


    return(
    <Web3Context.Provider value={{...state, userMetamask}}>
        {children}
    </Web3Context.Provider>
)}