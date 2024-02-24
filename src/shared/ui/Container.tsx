import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "@/shared/const";

export const Container = ({ children }: { children: ReactNode }): ReactElement => {
    return <StyledContainer>
        {children}
    </StyledContainer>;
};

const StyledContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
    padding-horizontal: 16px;
    padding-bottom: 28px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;
