import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext, { AuthProvider } from './src/contexts/auth';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routers />
        <StatusBar style='auto' />
      </AuthProvider>
    </NavigationContainer>
  );
}
