import React, { type FC } from "react";
import { StyleSheet } from "react-native";
import Empty from "./Empty";
import styled from "styled-components/native";
import { PrimaryButton, SearchInput } from "@/shared/ui";
import CoachCard from "./CoachCard";

const isEmpty = false;

const Body = styled.View`
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex-basis: 95%;
    padding-bottom: 35px;
`;

const CoachContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const CoachSearch: FC = () => {
    return (
        <Body>
            <SearchInput />
            <CoachContainer style={isEmpty ? styles.empty : styles.notEmpty}>
                {isEmpty
                    ? <Empty />
                    : <CoachCard />}
            </CoachContainer>
            <ButtonContainer>
                <PrimaryButton label="+" style={{ width: 56, marginLeft: 0 }} />
            </ButtonContainer>
        </Body>

    );
};

const styles = StyleSheet.create({
    empty: {
        justifyContent: "center",
    },
    notEmpty: {
        justifyContent: "flex-start",
    },
});

export default CoachSearch;