import { useFonts } from "expo-font";
import { type ReactElement } from "react";

import { Navigation } from "../Navigation/Navigation";

const App = (): ReactElement => {
    const [fontsLoaded] = useFonts({
        "NunitoSans-Bold": require("@/assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
        "NunitoSans-Regular": require("@/assets/fonts/NunitoSans/NunitoSans-Regular.ttf"),
        "NunitoSans-SemiBold": require("@/assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf"),
    });

    if (!fontsLoaded) return <></>;

    return <Navigation />;
};

export default App;
