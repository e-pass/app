import styled from "styled-components/native";
import { type ReactElement, type ReactNode } from "react";
import type { TextProps } from "react-native";

const Title = styled.Text`
    font-size: 34px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -1%;
`;

interface TitleProps extends TextProps {
    children: ReactNode;
}

export const PrimaryTitle = ({ children, ...props }: TitleProps): ReactElement => {
    return <Title {...props}>{children}</Title>;
};
