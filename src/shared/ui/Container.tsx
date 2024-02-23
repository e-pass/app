import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "../const";

export const Container = ({ children }: { children: ReactNode }): ReactElement => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
    margin: 0 16px 28px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;
