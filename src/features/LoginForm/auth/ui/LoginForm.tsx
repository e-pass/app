import React, { type FC } from "react";
import { Logo } from "@/assets/icons";
import { ExtraText, ExtraView, StyledTitle, TextLink, TextLinkContent } from "./styles";
import { InnerContainer, PrimaryButton, PrimaryInput } from "@/shared/ui";

const LoginForm: FC = () => {
    return (
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
    );
};

export default LoginForm;