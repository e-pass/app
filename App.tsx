import { useFonts } from "expo-font";
import { type ReactElement } from "react";

import { Navigation } from "./src/app/Navigation";

const App = (): ReactElement => {
    const [fontsLoaded] = useFonts({
        Inter: require("./assets/fonts/Inter/Inter.ttf"),
        "Inter-Semibold": require("./assets/fonts/Inter/Inter-Semibold.otf"),
        "Navigo-Medium": require("@/assets/fonts/Navigo/Navigo-Medium.ttf"),
        "NunitoSans-ExtraLight": require("./assets/fonts/NunitoSans/NunitoSans-ExtraLight.ttf"),
        "NunitoSans-Bold": require("./assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
        NunitoSans: require("./assets/fonts/NunitoSans/NunitoSans-Regular.ttf"),
        "NunitoSans-SemiBold": require("./assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf"),
        "Roboto-Medium": require("@/assets/fonts/Roboto/Roboto-Medium.ttf"),
        "SF-Pro-Display-Bold": require("./assets/fonts/SF/SF-Pro-Display-Bold.otf"),
        "SF-Pro-Display-Regular": require("./assets/fonts/SF/SF-Pro-Display-Regular.otf"),
        "SF-Pro-Display-Semibold": require("./assets/fonts/SF/SF-Pro-Display-Semibold.otf"),
        "SFProText-Bold": require("./assets/fonts/SF/SFProText-Bold.ttf"),
        "SFProText-Medium": require("./assets/fonts/SF/SFProText-Medium.ttf"),
        "SFProText-Regular": require("./assets/fonts/SF/SFProText-Regular.ttf"),
        "SFProText-Semibold": require("./assets/fonts/SF/SFProText-Semibold.ttf"),
    });

    if (!fontsLoaded) return <></>;
    return <Navigation />;
};

export default App;
