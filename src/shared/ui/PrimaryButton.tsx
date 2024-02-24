import styled from "styled-components/native";
import { type ReactElement } from "react";
import { colors } from "@/shared/const";
import { type PressableProps } from "react-native";

const Button = styled.Pressable`
    width: 100%;
    padding: 16px;
    background-color: ${colors.orange};
    border-radius: 12px;
    margin-top: 12px;
`;

const Text = styled.Text`
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0;
    user-select: none;
`;

interface ButtonProps extends PressableProps {
    label: string;
}

/** Primary Button | Accepts label (string), and other props valid to Pressable  */
export const PrimaryButton = ({ label, ...props }: ButtonProps): ReactElement => {
    return (
        <Button {...props}>
            <Text>{label}</Text>
        </Button>
    );
};
