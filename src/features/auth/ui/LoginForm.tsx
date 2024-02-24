import React, { type FC } from "react";
import { Logo } from "@/assets/icons";
import { InnerContainer, PrimaryButton, PrimaryInput } from "@/shared/ui";
import { B2Mobile, H1Mobile, TextLink } from "@/shared/const";
import styled from "styled-components/native";

const LoginForm: FC = () => {
    return (
        <InnerContainer>
            <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />
            <H1Mobile style={{ marginBottom: 12 }}>Вход в систему</H1Mobile>
            <ExtraView>
                <B2Mobile>Нет аккаунта?</B2Mobile>
                <TextLink>Зарегистрироваться</TextLink>
            </ExtraView>
            <PrimaryInput style={{ marginBottom: 20 }} />
            <PrimaryButton label={"Войти"} />
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