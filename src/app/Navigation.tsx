import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Button } from "react-native";

import { Coaches } from "@/pages/Coaches";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Registration";
import { Splash } from "@/pages/Splash";
import { VerificationCode } from "@/pages/VerificationCode";

import { AuthProvider, useAuth } from "./AuthContext";

const Stack = createNativeStackNavigator();

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

const MainStack = () => {
    const { onLogout } = useAuth();
    return (
        <Stack.Navigator
            initialRouteName='Coaches'
            screenOptions={{
                headerShown: true,
                // eslint-disable-next-line react/no-unstable-nested-components
                headerRight: () => <Button onPress={onLogout} title='Logout' />,
                contentStyle: { backgroundColor: "#FBFEFD" },
            }}
        >
            <Stack.Screen name='Coaches' component={Coaches} />
        </Stack.Navigator>
    );
};

export const Navigation = () => {
    return (
        <AuthProvider>
            <Layout />
        </AuthProvider>
    );
};

const Layout = () => {
    const { authState } = useAuth();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {authState === undefined ? (
                    <Stack.Screen name='Splash' component={Splash} />
                ) : (
                    <>
                        {authState?.authenticated ? (
                            <Stack.Screen name='Main' component={MainStack} />
                        ) : (
                            <Stack.Screen name='Auth' component={AuthStack} />
                        )}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
