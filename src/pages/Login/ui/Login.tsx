import React from "react";
import { StatusBar } from "react-native";
import { Container } from "src/features/ui";

import { B2Mobile, H1Mobile, Subtitle, TextLink } from "@/entities/constants";
import { Logo } from "@/shared/assets";
import { INavigationProps } from "@/shared/models";
import { LoginForm } from "@/widgets/Auth";
import { Header } from "@/widgets/Header";

const Login = ({ navigation }: INavigationProps) => {
    return (
        <Container>
            <StatusBar barStyle='dark-content' />
            <Header headerLayout={{ rightIcon: true }} rightIcon='close' />

            <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
            <H1Mobile>Вход в систему</H1Mobile>
            <Subtitle>
                <B2Mobile>Нет аккаунта?</B2Mobile>
                <TextLink onPress={() => navigation.navigate("Registration")}>
                    Зарегистрироваться
                </TextLink>
            </Subtitle>

            <LoginForm navigation={navigation} />
        </Container>
    );
};

export default Login;
