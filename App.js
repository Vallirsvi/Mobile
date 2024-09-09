import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed:true,
         token:"Voce logou meus parabens",
         email: "aula@fatectq.edu.br"}}>
     <Routers/>
      </AuthContext.Provider>
    </NavigationContainer>

  );
}