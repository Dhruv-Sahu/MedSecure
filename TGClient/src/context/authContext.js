import { createContext, useReducer } from "react";

function authReducer(state, action) {
  switch (action.type) {
    case "Login":
      return { 
            ...state, 
            isConnected: true, 
            userData: action.payload.data 
        };

    case "Logout":
      return {
        ...state,
        isConnected: false,
        userData: null
      };

    default:
      return state;
  }
}

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isConnected: false,
    userData: null,
  });

  const userLogin = (data) => {
    console.log("auth context: ", data);
    dispatch({
      type: "Login",
      payload: { data },
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
