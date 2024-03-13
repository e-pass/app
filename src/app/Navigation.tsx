import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Coaches } from "@/pages/Coaches";
import { Login } from "@/pages/Login";
import { RegistrationCode, RegistrationForm } from "@/pages/Registration";

const Stack = createNativeStackNavigator();

const RegistrationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='RegistrationForm'
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}
        >
            <Stack.Screen name='RegistrationForm' component={RegistrationForm} />
            <Stack.Screen
                name='RegistrationCode'
                component={RegistrationCode}
                initialParams={{ phoneNumber: "+7 912 345 67 89" }}
            />
        </Stack.Navigator>
    );
};

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}
            >
                <Stack.Screen name='Registration' component={RegistrationStack} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Coaches' component={Coaches} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
