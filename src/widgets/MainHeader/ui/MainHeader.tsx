import React, { type FC } from "react";
import { BackButton, CloseButton,  PrimaryTitle } from "@/shared/ui";
import styled from "styled-components/native";

const Body = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 14px 0 21px;
`;

interface Props {
    title: string;
    isBackBtn?: boolean;
    isCloseBtn?: boolean;
    onBackPress?: (() => void) | undefined;
    onClosePress?: (() => void) | undefined;
}

const MainHeader: FC<Props> = (
    {
        title,
        isBackBtn = false,
        isCloseBtn = false,
        onBackPress,
        onClosePress,
    }) => {
    return (
        <Body>
            {isBackBtn && (
                <BackButton title="" onPress={onBackPress} top={4} left={0} />
            )}
            <PrimaryTitle>{title}</PrimaryTitle>
            {isCloseBtn && (
                <CloseButton title="" onPress={onBackPress} top={4} right={0} />
            )}
        </Body>
    );
};

export default MainHeader;