import { Image, View } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo source={require("@/assets/icons/logo.svg")} />
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

const StyledLogo = styled.Image``;

const StyledIcon = styled.Image`
    width: 13px;
    height: 13px;
`;

export default Header;
