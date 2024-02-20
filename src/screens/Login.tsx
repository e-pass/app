import { Container, InnerContainer } from "../shared/ui/Container";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import Header from "../shared/ui/Header";
import {
    ExtraText,
    ExtraView,
    StyledTitle,
    TextLink,
    TextLinkContent,
} from "../shared/ui/auth/styles";
import styled from "styled-components/native";
import { colors } from "../shared/const/colors";
import Logo from "@/assets/icons/logo.svg";
import { PrimaryButton } from "../shared/ui/PrimaryButton";
import { PrimaryInput } from "../shared/ui/PrimaryInput";
import { useFonts } from "expo-font";

const Login = () => {
    const [fontsLoaded] = useFonts({
        "NunitoSans-Bold": require("@/assets/fonts/NunitoSans-Bold.ttf"),
        "NunitoSans-Regular": require("@/assets/fonts/NunitoSans-Regular.ttf"),
        "NunitoSans-Semibold": require("@/assets/fonts/NunitoSans-Semibold.ttf"),
    });

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
            <Header headerLayout={{ leftIcon: true, rightIcon: true }} rightIcon="close"></Header>
            <InnerContainer>
                <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
                <StyledTitle
                    style={{ letterSpacing: -0.34, lineHeight: 36, fontFamily: "NunitoSans-Bold" }}
                >
                    Вход в систему
                </StyledTitle>
                <ExtraView>
                    <ExtraText
                        style={{
                            letterSpacing: -0.15,
                            lineHeight: 20,
                            fontFamily: "NunitoSans-Regular",
                        }}
                    >
                        Нет аккаунта?
                    </ExtraText>
                    <TextLink>
                        <TextLinkContent style={{ fontFamily: "NunitoSans-Semibold" }}>
                            Зарегистрироваться
                        </TextLinkContent>
                    </TextLink>
                </ExtraView>
                <PrimaryInput style={{ marginBottom: 20 }} />
                <PrimaryButton label={"Войти"} />
            </InnerContainer>
        </Container>
    );
};

export default Login;
