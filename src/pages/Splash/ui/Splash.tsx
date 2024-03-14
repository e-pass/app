import { StatusBar } from "react-native";
import styled from "styled-components/native";

import Logo from "@/shared/assets/icons/logo.svg";

const Screen = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Splash = () => {
    return (
        <Screen>
            <StatusBar barStyle='dark-content' />
            <Logo width={200} />
        </Screen>
    );
};

export default Splash;
