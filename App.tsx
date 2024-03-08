import { type ReactElement } from "react";
import { useFonts } from "expo-font";
import { Navigation } from "./src/app/Navigation";

const App = (): ReactElement => {
    const [fontsLoaded] = useFonts({
        "Inter": require("./assets/fonts/Inter.ttf"),
        "Inter-Semibold": require("./assets/fonts/Inter-Semibold.otf"),
        "Navigo-Medium": require("./assets/fonts/Navigo-Medium.ttf"),
        "NunitoSans": require("./assets/fonts/NunitoSans.ttf"),
        "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
        "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
        "NunitoSans-Semibold": require("./assets/fonts/NunitoSans-Semibold.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "SF-Pro-Display-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
        "SF-Pro-Display-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
        "SF-Pro-Display-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
        "SFProText-Bold": require("./assets/fonts/SFProText-Bold.ttf"),
        "SFProText-Medium": require("./assets/fonts/SFProText-Medium.ttf"),
        "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
        "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
    });

    if (!fontsLoaded) return <></>;
    return <Navigation />;
};

export default App;
