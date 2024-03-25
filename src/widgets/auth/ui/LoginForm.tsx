import React, { useState } from "react";
import { PrimaryButton, PrimaryInput } from "src/features/ui";

import { Form } from "@/entities/constants/styles/styles";
import { INavigationProps } from "@/shared/models";
import { useAuth } from "@/shared/providers";

export const LoginForm = ({ navigation }: INavigationProps) => {
    const { onSendCode } = useAuth();

    const [phone, setPhone] = useState<string>();
    const [isError, setIsError] = useState<boolean>(false);
    const send = async () => {
        if (!phone || !onSendCode) return;
        setIsError(false);

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
        <Form style={{ marginTop: 28 }}>
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
        </Form>
    );
};
