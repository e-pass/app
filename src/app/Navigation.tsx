import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

import { Coaches } from "@/pages/Coaches";
import { Login } from "@/pages/Login";
import { RegistrationForm } from "@/pages/Registration";
import { VerificationCode } from "@/pages/VerificationCode";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='RegistrationForm' component={RegistrationForm} />
            <Stack.Screen
                name='VerificationCode'
                component={VerificationCode}
                initialParams={{ phoneNumber: "+7 912 345 67 89" }}
            />
        </Stack.Navigator>
    );
};

export const Navigation = () => {
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("access_token");
            console.log("token: ", token);
        })();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Auth'
                screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}
            >
                <Stack.Screen name='Registration' component={AuthStack} />
                <Stack.Screen name='Coaches' component={Coaches} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
