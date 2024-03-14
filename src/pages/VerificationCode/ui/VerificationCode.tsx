import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Container } from "src/features/ui";

import { B2Mobile, H1Mobile } from "@/entities/constants";
import { Logo } from "@/shared/assets";
import { INavigationProps } from "@/shared/models/";
import VerificationForm from "@/widgets/Auth/ui/VerificationForm";
import { Header } from "@/widgets/Header";

const VerificationCode = ({ route, navigation }: INavigationProps) => {
    const { phoneNumber } = route.params;

    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <StatusBar barStyle='dark-content' />

                <Header
                    navigation={navigation}
                    headerLayout={{ rightIcon: true, leftIcon: true }}
                    rightIcon='close'
                />
                <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />

                <H1Mobile>Подтвердите номер телефона</H1Mobile>
                <B2Mobile style={{ marginTop: 12 }}>
                    Мы отправили код на номер {phoneNumber}.
                </B2Mobile>

                <VerificationForm navigation={navigation} route={route} />
            </ScrollView>
        </Container>
    );
};
export default VerificationCode;
