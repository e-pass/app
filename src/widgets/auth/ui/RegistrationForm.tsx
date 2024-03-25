import React, { useCallback, useEffect, useState } from "react";
import { PrimaryButton, PrimaryInput } from "src/features/ui";

import { Form } from "@/entities/constants/styles/styles";
import { Checkbox } from "@/features/ui";
import { type IRegistrationFormData } from "@/pages/Registration";
import { INavigationProps } from "@/shared/models";
import { useAuth } from "@/shared/providers";

export const RegistrationForm = ({ navigation }: INavigationProps) => {
    const { onRegister, onSendCode } = useAuth();
    const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false);

    const [disabledButton, setDisabledButton] = useState<boolean>(true);

    const [formData, setFormData] = useState<IRegistrationFormData>({
        firstname: "",
        lastname: "",
        phoneNumber: "",
        isTrainer: false,
    });

    const handleChangeFormData = (key: keyof IRegistrationFormData, value: string | boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    useEffect(() => {
        const isFormDataEmpty = Object.values(formData).some((value) => value === "");

        if (isFormDataEmpty || !isAgreePrivacy) setDisabledButton(true);
        else setDisabledButton(false);
    }, [formData, isAgreePrivacy]);

    const sendForm = useCallback(async () => {
        if (!onRegister || !onSendCode) return;

        const response = await onRegister(formData);

        if (response.error) return;

        const responseCode = await onSendCode(formData.phoneNumber);

        if (responseCode.error) return;

        navigation.navigate("VerificationCode", {
            phoneNumber: formData.phoneNumber,
        });
    }, [formData]);

    return (
        <Form>
            <PrimaryInput
                changedState={(value) => {
                    handleChangeFormData("firstname", value);
                }}
                textContentType='name'
                placeholder='Имя'
            />
            <PrimaryInput
                changedState={(value) => {
                    handleChangeFormData("lastname", value);
                }}
                textContentType='familyName'
                placeholder='Фамилия'
            />
            <PrimaryInput
                changedState={(value) => {
                    handleChangeFormData("phoneNumber", value);
                }}
                textContentType='telephoneNumber'
                placeholder='Номер телефона'
            />

            <Checkbox
                isChecked={formData.isTrainer}
                changeChecked={(value) => {
                    handleChangeFormData("isTrainer", value);
                }}
                text='Я — тренер'
            />
            <Checkbox
                isChecked={isAgreePrivacy}
                changeChecked={() => {
                    setIsAgreePrivacy((prevState) => !prevState);
                }}
                text='Соглашаюсь с Политикой обработки персональных данных'
            />

            <PrimaryButton
                disabled={disabledButton}
                onPress={sendForm}
                label='Зарегистрироваться'
            />
        </Form>
    );
};
