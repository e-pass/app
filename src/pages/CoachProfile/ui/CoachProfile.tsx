import React from "react";
import { Container, Flex, PrimaryButton } from "@/shared/ui";
import { B1Mobile, H2Mobile } from "@/shared/constants";
import { StyleSheet } from "react-native";
import UserInfo from "./UserInfo";
import styled from "styled-components/native";
import { Header } from "@/widgets/Header";

const CoachProfile = ({ navigation }: { navigation: any }) => {
    return (
        <Container>
            <Flex vertical gap={20} flex={1}>
                <Header
                    rightIcon="edit"
                    pressRight={() => navigation.navigate("EditCoachProfile")}
                    pressLeft={() => {}}>
                    <H2Mobile>Профиль</H2Mobile>
                </Header>

                <UserInfo />

                <Flex vertical align="flex-start">
                    <H2Mobile style={styles.title}>О приложении</H2Mobile>
                    <InfoField>
                        <B1Mobile style={{ color: "#797476" }}>Условия использования</B1Mobile>
                    </InfoField>
                    <InfoField>
                        <B1Mobile style={{ color: "#797476" }}>
                            Политика конфиденциальности
                        </B1Mobile>
                    </InfoField>
                </Flex>
            </Flex>
            <PrimaryButton label="Выйти из аккаунта" variant="bordered" />
        </Container>
    );
};

const InfoField = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 11px 0;
`;

const styles = StyleSheet.create({
    textField: {
        maxWidth: "55%",
        textAlign: "right",
    },
    title: {
        alignSelf: "flex-start",
        marginBottom: 16,
    },
});

export default CoachProfile;
