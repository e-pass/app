import React, { type FC } from "react";
import { StyleSheet } from "react-native";
import { ColumnContainer } from "@/shared/ui";
import { B1Mobile, H2Mobile } from "@/shared/constants";
import styled from "styled-components/native";

const UserInfo: FC = () => {
    return (
        <>
            <ColumnContainer style={{ gap: 12 }}>
                <Avatar source={require("@/assets/images/user-avatar.png")} />
                <H2Mobile style={{ textAlign: "center" }}>
                    Имя Фамилия Имя Фамилия Имя Фамилия
                </H2Mobile>
            </ColumnContainer>

            <ColumnContainer>
                <InfoField>
                    <B1Mobile style={{ color: "#797476" }}>
                        Text
                    </B1Mobile>
                    <B1Mobile style={styles.textField}>
                        Text
                    </B1Mobile>
                </InfoField>
                <InfoField>
                    <B1Mobile style={{ color: "#797476" }}>
                        Номер телефона
                    </B1Mobile>
                    <B1Mobile style={styles.textField}>
                        +7 911 235-67-89
                    </B1Mobile>
                </InfoField>
                <InfoField>
                    <B1Mobile style={{ color: "#797476" }}>
                        Название секции
                    </B1Mobile>
                    <B1Mobile style={styles.textField}>
                        TextText Text TextTextText Text dsad asdd
                    </B1Mobile>
                </InfoField>
            </ColumnContainer>
        </>
    );
};

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: darkgray;
`;

const InfoField = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 11px 0;
`;

const styles = StyleSheet.create({
    textField: {
        maxWidth: "55%",
        textAlign: "right"
    }
});

export default UserInfo;