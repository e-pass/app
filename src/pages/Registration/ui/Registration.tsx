import React from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, StatusBar } from "react-native";
import { Container } from "src/features/ui";

import { B2Mobile, H1Mobile, TextLink } from "@/entities/constants";
import { Subtitle } from "@/entities/constants/styles/styles";
import { Logo } from "@/shared/assets";
import { INavigationProps } from "@/shared/models";
import { RegistrationForm } from "@/widgets/Auth";
import { Header } from "@/widgets/Header";

const Registration = ({ navigation }: INavigationProps) => {
    return (
        <Container>
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar barStyle='dark-content' />

                    <Header headerLayout={{ rightIcon: true }} rightIcon='close' />
                    <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />

                    <H1Mobile>Регистрация</H1Mobile>

                    <Subtitle>
                        <B2Mobile>Уже зарегистрированы?</B2Mobile>
                        <Pressable onPress={() => navigation.navigate("Login")}>
                            <TextLink>Войти</TextLink>
                        </Pressable>
                    </Subtitle>

                    <RegistrationForm navigation={navigation} />
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default Registration;
