import styled from "styled-components/native";
import { type ReactElement, type ReactNode } from "react";
import type { TextProps } from "react-native";

const Title = styled.Text`
    font-size: 21px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1%;
`;

interface TitleProps extends TextProps {
    children: ReactNode;
}

/** Primary Title | Accepts children (ReactNode), and other props valid to Text  */
export const MainTitle = ({ children, ...props }: TitleProps): ReactElement => {
    return <Title {...props}>{children}</Title>;
};
