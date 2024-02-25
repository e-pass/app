import { type ReactElement } from "react";
import { useFonts } from "expo-font";
import { Navigation } from "./src/app/Navigation";

const App = (): ReactElement => {
    const [fontsLoaded] = useFonts({
        "Inter": "@/assets/fonts/Inter.ttf",
        "Inter-Semibold": "@/assets/fonts/Inter-Semibold.otf",
        "Navigo-Medium": "@/assets/fonts/Navigo-Medium.ttf",
        "NunitoSans": "@/assets/fonts/NunitoSans.ttf",
        "NunitoSans-Bold": "@/assets/fonts/NunitoSans-Bold.ttf",
        "NunitoSans-Regular": "@/assets/fonts/NunitoSans-Regular.ttf",
        "NunitoSans-Semibold": "@/assets/fonts/NunitoSans-Semibold.ttf",
        "Roboto-Medium": "@/assets/fonts/Roboto-Medium.ttf",
        "SF-Pro-Display-Bold": "@/assets/fonts/SF-Pro-Display-Bold.otf",
        "SF-Pro-Display-Regular": "@/assets/fonts/SF-Pro-Display-Regular.otf",
        "SF-Pro-Display-Semibold": "@/assets/fonts/SF-Pro-Display-Semibold.otf",
        "SFProText-Bold": "@/assets/fonts/SFProText-Bold.ttf",
        "SFProText-Medium": "@/assets/fonts/SFProText-Medium.ttf",
        "SFProText-Regular": "@/assets/fonts/SFProText-Regular.ttf",
        "SFProText-Semibold": "@/assets/fonts/SFProText-Semibold.ttf",
    });
    return <Navigation />;
};

export default App;
