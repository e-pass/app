import React, { useState } from "react";
import { B2Mobile, H1Mobile, TextLink } from "src/shared/constants";
import styled from "styled-components/native";

import { Logo } from "@/assets/icons";
import { InnerContainer, PrimaryButton, PrimaryInput } from "@/shared/ui";

const LoginForm = ({ navigation }: { navigation: any }) => {
    const [phone, setPhone] = useState<string>();

    return (
        <InnerContainer>
            <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
            <H1Mobile style={{ marginBottom: 12 }}>Вход в систему</H1Mobile>
            <ExtraView>
                <B2Mobile>Нет аккаунта?</B2Mobile>
                <TextLink onPress={() => navigation.navigate("RegistrationForm")}>
                    Зарегистрироваться
                </TextLink>
            </ExtraView>
            <PrimaryInput
                changedState={(value: string) => {
                    setPhone(value);
                }}
                textContentType='telephoneNumber'
                placeholder='Номер телефона'
            />
            <PrimaryButton
                onPress={() =>
                    navigation.navigate("VerificationCode", {
                        phoneNumber: phone,
                    })
                }
                label='Войти'
            />
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
