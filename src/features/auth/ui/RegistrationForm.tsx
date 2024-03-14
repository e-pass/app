import React, { useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

import { type IRegistrationFormData } from "@/pages/Registration";
import { B2Mobile, H1Mobile, TextLink } from "@/shared/constants";
import { Subtitle } from "@/shared/constants/styles";
import { PrimaryButton, PrimaryInput } from "@/shared/ui";
import Checkbox from "@/shared/ui/Checkbox";

import { useAuth } from "../../../app/AuthContext";

const Form = styled.View`
    gap: 24px;
    margin-top: 28px;
`;

const RegistrationForm = ({ navigation }: { navigation: any }) => {
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

        if (response.error) {
            alert("Error");
            return;
        }

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

export default RegistrationForm;
