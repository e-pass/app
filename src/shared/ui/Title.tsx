import styled from "styled-components/native";
import { type ReactElement, type ReactNode } from "react";

const Text = styled.Text`
    font-size: 34px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -1%;
`;

export const Title = ({ children }: { children: ReactNode }): ReactElement => {
    return <Text>{children}</Text>;
};
