import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "@/pages/Login";
import Coaches from "@/pages/Coaches/Coaches";

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
