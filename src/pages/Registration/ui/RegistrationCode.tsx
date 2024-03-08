import { Container } from "@/shared/ui";
import { ScrollView, StatusBar } from "react-native";
import { B2Mobile, colors, H1Mobile } from "src/shared/constants";
import { Header } from "@/widgets/Header";
import { Logo } from "@/assets/icons";
import React from "react";

const RegistrationCode = ({ navigation }: { navigation: any }) => {

    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />

                <Header headerLayout={{ rightIcon: true }} rightIcon="close" />
                <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />

                <H1Mobile>Подтвердите номер телефона</H1Mobile>
                <B2Mobile>Мы отправили код на номер +7 123 456 78 90.</B2Mobile>

            </ScrollView>
        </Container>
    );
};

export default RegistrationCode;