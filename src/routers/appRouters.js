// Criando function
// export default exporta um componente em react

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppRouters() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login acesso' }}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'Register' }}
                />


            </Stack.Navigator>

    )

}