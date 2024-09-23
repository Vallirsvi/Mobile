import Login from "../pages/Login";
// import Register from "../pages/register";
import Home from "../pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AuthRouters(){
   return(
    <Tab.Navigator>
         <Tab.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
        <Tab.Screen 
            name="Login"
            component={Login} 
            options={{title: 'Login'}}
        />
      </Tab.Navigator>
   )
}