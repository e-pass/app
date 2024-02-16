import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

const Header = () => {
    const [fontsLoaded] = useFonts({
        "Navigo-Medium": require("@/assets/fonts/Navigo-Medium.ttf"),
    });

    return (
        <StyledHeader>
            <StyledText>E-PASS</StyledText>
            <StyledIcon source={require("@/assets/icons/close-btn.png")} />
        </StyledHeader>
    );
};

const StyledHeader = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 38px 20px 33px 14px;
    justify-content: space-between;
    align-items: center;
`;

const StyledText = styled.Text`
    font-family: Navigo-Medium;
    font-weight: 500;
    font-size: 24px;
`;

const StyledIcon = styled.Image`
    width: 13px;
    height: 13px;
`;

export default Header;
