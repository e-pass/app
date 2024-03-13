import React, { type FC } from "react";
import styled from "styled-components/native";

const Body = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
`;

const Circle = styled.View`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: #d9d9d9;
`;

const InfoText = styled.Text`
    font-size: 17px;
    font-weight: 600;
    line-height: 24px;
    color: #726f6e;
`;

const Empty: FC = () => (
    <Body>
        <Circle />
        <InfoText>Тренеров пока нет</InfoText>
    </Body>
);

export default Empty;
