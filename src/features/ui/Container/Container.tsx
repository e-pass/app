import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";

export const Container = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <Wrapper>
            <StyledContainer>{children}</StyledContainer>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
    flex: 1;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;

const StyledContainer = styled.View`
    flex: 1;
    padding: 0 16px 28px;
`;
