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
import { PrimaryButton } from "../shared/ui/PrimaryButton";
import { PrimaryInput } from "../shared/ui/PrimaryInput";

const Login = () => {
    return (
        <Container>
            <StatusBar barStyle={"light-content"} />
            <Header headerLayout={{ leftIcon: true, rightIcon: true }} rightIcon="close">
                <Text>some text</Text>
            </Header>
            <InnerContainer>
                <StyledTitle style={{ letterSpacing: -0.34, lineHeight: 36 }}>
                    Вход в систему
                </StyledTitle>
                <ExtraView>
                    <ExtraText style={{ letterSpacing: -0.15, lineHeight: 20 }}>
                        Нет аккаунта?
                    </ExtraText>
                    <TextLink>
                        <TextLinkContent>Зарегистрироваться</TextLinkContent>
                    </TextLink>
                </ExtraView>
                <PrimaryInput style={{ marginBottom: 20 }} />
                <PrimaryButton label={"Войти"} />
            </InnerContainer>
        </Container>
    );
};

export default Login;
