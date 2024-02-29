import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "@/pages/Login";
import Coaches from "@/pages/Coaches/Coaches";
import { Registration } from "@/pages/Registration";
import { CoachProfile } from "@/pages/CoachProfile";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CoachProfile"
                             screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FBFEFD" } }}>
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Coaches" component={Coaches} />
                <Stack.Screen name="CoachProfile" component={CoachProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
