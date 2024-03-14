import { useFonts } from "expo-font";
import React, { type FC } from "react";
import { colors } from "src/shared/constants";
import styled from "styled-components/native";

import ThreeDots from "@/assets/icons/three-dots.svg";

const Body = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    border-radius: 16px;
    padding: 16px;
    background: ${colors.beige};
`;

const InfoContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const NameContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const Name = styled.Text`
    font-family: "NunitoSans-Bold";
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    width: 80%;
`;

const NameIcon = styled.Image`
    width: 16px;
    height: 24px;
`;

const GroupContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const Group = styled.Text`
    font-family: "NunitoSans-Bold";
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
`;

const GroupIcon = styled.Image`
    width: 22px;
    height: 24px;
    object-fit: contain;
`;
1;

const CoachCard: FC = () => (
    <Body>
        <InfoContainer>
            <NameContainer>
                <NameIcon source={require("@/assets/icons/person.png")} />
                <Name>Константин Константинополький</Name>
            </NameContainer>
            <GroupContainer>
                <GroupIcon source={require("@/assets/icons/people.png")} />
                <Group>1 группа</Group>
            </GroupContainer>
        </InfoContainer>
        <ThreeDots width={24} height={24} style={{ marginTop: 10, flexBasis: 24 }} />
    </Body>
);

export default CoachCard;
