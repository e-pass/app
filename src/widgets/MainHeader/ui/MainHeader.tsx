import React, { type FC } from "react";
import { Text, View } from "react-native";
import BackButton from "../../../shared/ui/BackButton";
import { MainTitle } from "../../../shared/ui/MainTitle";
import styled from "styled-components/native";
import CloseButton from "../../../shared/ui/CloseButton";

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
            <MainTitle>{title}</MainTitle>
            {isCloseBtn && (
                <CloseButton title="" onPress={onBackPress} top={4} right={0} />
            )}
        </Body>
    );
};

export default MainHeader;