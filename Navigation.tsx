import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Coaches from "@/pages/Coaches/Coaches";
import LoginForm from "@/features/LoginForm/auth/ui/LoginForm";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Coaches">
            <Stack.Screen name="Coaches" component={Coaches} />
            <Stack.Screen name="Login" component={LoginForm} />
        </Stack.Navigator>
    </NavigationContainer>;
};


