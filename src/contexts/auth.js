import { createContext, useState } from "react";



const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    return (
        <AuthContext.Provider value={{
            signed: signed,
            token: "asdsadawdw awadsdwa",
            email: userEmail, setSigned, setUserEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext;