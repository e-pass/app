import styled from "styled-components/native";
import { type ReactElement } from "react";
import { colors } from "src/shared/constants";
import { type PressableProps, StyleSheet } from "react-native";

const Button = styled.Pressable`
    width: 100%;
    padding: 16px;
    background-color: ${colors.orange};
    border-radius: 16px;
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
    disabled?: boolean;
}

/** Primary Button | Accepts label (string), and other props valid to Pressable  */
export const PrimaryButton = ({ label, disabled = false, ...props }: ButtonProps): ReactElement => {
    return (
        <Button {...props} style={disabled && styles.disabledButton} disabled={disabled}>
            <Text style={disabled && styles.disabledText}>{label}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    disabledButton: {
        backgroundColor: "#A39FA1",
    },
    disabledText: {
        color: "#F5F1F3",
    },
});