const { createContext } = require("react");

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    return(
<AuthContext.Provider value={{signed:false,
    token:"Voce logou meus parabens",
    email: "aula@fatectq.edu.br"}}>
        
        {children}
 </AuthContext.Provider>

    )
}

export default AuthContext;

