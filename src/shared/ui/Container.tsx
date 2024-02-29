import { FC, PropsWithChildren, type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "src/shared/constants";
import { View } from "react-native";

export const Container = ({ children }: { children: ReactNode }): ReactElement => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.SafeAreaView`
    flex: 1;
    margin: 0 16px 28px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;

export const ColumnContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;