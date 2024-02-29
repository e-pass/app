import React from "react";
import { ColumnContainer, Flex, PrimaryButton, PrimaryInput } from "@/shared/ui";
import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { PhotoIcon } from "@/assets/icons";

const EditProfileForm = () => {
    return (
        <Flex vertical align="center" flex={1}>
            <Flex vertical align="center" flex={1}>
                <View style={{ position: "relative", marginBottom: 36 }}>
                    <Avatar source={require("@/assets/images/user-avatar.png")} />
                    <TouchableOpacity style={styles.editPhoto}>
                        <PhotoIcon />
                    </TouchableOpacity>
                </View>

                <Flex vertical gap={16}>
                    <PrimaryInput placeholder="Имя" />
                    <PrimaryInput placeholder="Фамилия" />
                    <PrimaryInput placeholder="Номер телефона" />
                    <PrimaryInput placeholder="Секция" />
                </Flex>
            </Flex>

            <PrimaryButton label="Сохранить" />
            <PrimaryButton label="Удаалить аккаунт" variant="bordered" />
        </Flex>
    );
};

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: darkgray;
`;

const styles = StyleSheet.create({
    editPhoto: {
        borderRadius: 20,
        backgroundColor: "#E9F4EE",
        position: "absolute",
        bottom: 4,
        right: -4,
    },
});

export default EditProfileForm;
