import React, { useState } from "react";
import { B2Mobile, H1Mobile, TextLink } from "src/shared/constants";
import styled from "styled-components/native";

import { Logo } from "@/assets/icons";
import { InnerContainer, PrimaryButton, PrimaryInput } from "@/shared/ui";

import { useAuth } from "../../../app/AuthContext";

const LoginForm = ({ navigation }: { navigation: any }) => {
    const { onSendCode } = useAuth();

    const [phone, setPhone] = useState<string>();
    const [isError, setIsError] = useState<boolean>(false);

    const send = async () => {
        if (!phone || !onSendCode) return;

        const response = await onSendCode(phone);

        if (response.error) {
            setIsError(true);
            return;
        }

        navigation.navigate("VerificationCode", {
            phoneNumber: phone,
        });
    };

    return (
        <InnerContainer>
            <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
            <H1Mobile style={{ marginBottom: 12 }}>Вход в систему</H1Mobile>
            <ExtraView>
                <B2Mobile>Нет аккаунта?</B2Mobile>
                <TextLink onPress={() => navigation.navigate("Registration")}>
                    Зарегистрироваться
                </TextLink>
            </ExtraView>
            <PrimaryInput
                changedState={(value: string) => {
                    setPhone(value);
                }}
                errorMessage='Аккаунта с таким номером не существует!'
                isError={isError}
                textContentType='telephoneNumber'
                placeholder='Номер телефона'
            />
            <PrimaryButton onPress={send} label='Войти' />
        </InnerContainer>
    );
};

const ExtraView = styled.View`
    flex-direction: row;
    column-gap: 8px;
    margin-bottom: 42px;
    align-items: center;
`;

export default LoginForm;
