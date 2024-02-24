import { Container, PrimaryButton, PrimaryInput } from "@/shared/ui";
import { Pressable, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { B2Mobile, colors, H1Mobile, TextLink } from "src/shared/constants";
import { Header } from "@/widgets/Header";
import { Logo } from "@/assets/icons";
import React, { useState } from "react";
import Checkbox from "@/shared/ui/Checkbox";

const Subtitle = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
`;

const Form = styled.View`
    gap: 24px;
    margin-top: 28px;
`;

const Registration = ({ navigation }: { navigation: any }) => {
    const [isTrainer, setIsTrainer] = useState<boolean>(false);
    const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false);

    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled">
                <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
                <Header headerLayout={{ rightIcon: true }} rightIcon="close" />
                <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
                <H1Mobile>Регистрация</H1Mobile>
                <Subtitle>
                    <B2Mobile>Уже зарегистрированы?{" "}</B2Mobile>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <TextLink>Войти</TextLink>
                    </Pressable>
                </Subtitle>
                <Form>
                    <PrimaryInput placeholder="Имя" />
                    <PrimaryInput placeholder="Фамилия" />
                    <PrimaryInput placeholder="Номер телефона" />
                    <Checkbox isChecked={isTrainer} changeChecked={() => { setIsTrainer(prevState => !prevState); }}
                              text="Я — тренер" />
                    <Checkbox isChecked={isAgreePrivacy} changeChecked={() => { setIsAgreePrivacy(prevState => !prevState); }}
                              text="Соглашаюсь с Политикой обработки персональных данных" />
                    <PrimaryButton disabled={true}  label="Зарегистрироваться" />
                </Form>
            </ScrollView>
        </Container>
    );
};

export default Registration;