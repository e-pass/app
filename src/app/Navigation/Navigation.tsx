import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

import { H1Mobile } from "@/entities/constants";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Registration";
import { VerificationCode } from "@/pages/VerificationCode";
import { AuthProvider, useAuth } from "@/shared/providers";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <AuthProvider>
            <Layout />
        </AuthProvider>
    );
};

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registration' component={Registration} />
            <Stack.Screen
                name='VerificationCode'
                component={VerificationCode}
                initialParams={{ phoneNumber: "+7 912 345 67 89" }}
            />
        </Stack.Navigator>
    );
};

const TrainerStack = () => {
    const { onLogout } = useAuth();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerRight: () => <Button onPress={onLogout} title='Logout' />,
                contentStyle: { backgroundColor: "#FBFEFD" },
            }}
        >
            <Stack.Screen name='Home' component={() => <></>} />
        </Stack.Navigator>
    );
};

const Layout = () => {
    const { authState } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!authState || !authState.authenticated ? (
                    <Stack.Screen name='Auth' component={AuthStack} />
                ) : (
                    <Stack.Screen name='Trainer' component={TrainerStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
