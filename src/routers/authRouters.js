// Criando function
// export default exporta um componente em react

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AuthRouthers() {
    return (

        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home' }}
            />

            <Tab.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' }}
            />

        </Tab.Navigator>

    )

}