import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coaches from "./src/pages/Coaches/Coaches";
import Login from "./src/pages/Login/Login";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Coaches">
                <Stack.Screen name="Coaches" component={Coaches} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
