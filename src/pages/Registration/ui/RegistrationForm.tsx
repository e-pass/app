import { Container, PrimaryButton, PrimaryInput } from "@/shared/ui";
import { KeyboardAvoidingView, Pressable, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { B2Mobile, colors, H1Mobile, TextLink } from "@/shared/constants";
import { Header } from "@/widgets/Header";
import { Logo } from "@/assets/icons";
import React, { useEffect, useState } from "react";
import Checkbox from "@/shared/ui/Checkbox";
import { type IRegistrationFormData } from "@/pages/Registration";

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

const RegistrationForm = ({ navigation }: { navigation: any }) => {
    const [isTrainer, setIsTrainer] = useState<boolean>(false);
    const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false);

    const [disabledButton, setDisabledButton] = useState<boolean>(true);

    const [formData, setFormData] = useState<IRegistrationFormData>({
        firstname: "",
        lastname: "",
        phoneNumber: "",
    });
    
    const handleChangeFormData = (key: keyof IRegistrationFormData, value: string) => {
      setFormData(prevState => {
          return {
          ...prevState,
              [key]: value,
          };
      });
    };

    useEffect(() => {
        const isFormDataEmpty = Object.values(formData).some(value => value === "");

        if (isFormDataEmpty || !isAgreePrivacy) setDisabledButton(true);
        else setDisabledButton(false);

    }, [formData, isAgreePrivacy]);

    return (
        <Container>
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
            >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    <PrimaryInput changedState={(value) => { handleChangeFormData("firstname", value); }} textContentType="name" placeholder="Имя" />
                    <PrimaryInput changedState={(value) => { handleChangeFormData("lastname", value); }} textContentType="familyName" placeholder="Фамилия" />
                    <PrimaryInput changedState={(value) => { handleChangeFormData("phoneNumber", value); }} textContentType="telephoneNumber" placeholder="Номер телефона" />

                    <Checkbox isChecked={isTrainer} changeChecked={() => { setIsTrainer(prevState => !prevState); }}
                              text="Я — тренер" />
                    <Checkbox isChecked={isAgreePrivacy} changeChecked={() => { setIsAgreePrivacy(prevState => !prevState); }}
                              text="Соглашаюсь с Политикой обработки персональных данных" />

                    <PrimaryButton disabled={disabledButton} onPress={() => { navigation.navigate("RegistrationCode", {
                        phoneNumber: formData.phoneNumber
                    }); }}  label="Зарегистрироваться" />
                </Form>
            </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default RegistrationForm;