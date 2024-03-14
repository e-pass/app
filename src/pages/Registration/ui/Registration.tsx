import React from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, StatusBar } from "react-native";

import { Logo } from "@/assets/icons";
import RegistrationForm from "@/features/auth/ui/RegistrationForm";
import { B2Mobile, colors, H1Mobile, TextLink } from "@/shared/constants";
import { Subtitle } from "@/shared/constants/styles";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";

const Registration = ({ navigation }: { navigation: any }) => {
    return (
        <Container>
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />

                    <Header headerLayout={{ rightIcon: true }} rightIcon='close' />
                    <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />

                    <H1Mobile>Регистрация</H1Mobile>

                    <Subtitle>
                        <B2Mobile>Уже зарегистрированы? </B2Mobile>
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
