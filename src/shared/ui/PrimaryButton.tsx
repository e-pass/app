import styled from "styled-components/native";
import { type ReactElement } from "react";
import { colors } from "src/shared/constants";
import { type PressableProps, StyleSheet } from "react-native";

const Button = styled.Pressable`
    width: 100%;
    padding: 16px;
    border-radius: 20px;
    margin-top: 12px;
`;

const Text = styled.Text`
    font-family: "NunitoSans";
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
    variant?: "filled" | "bordered";
}

/** Primary Button | Accepts label (string), and other props valid to Pressable  */
export const PrimaryButton = ({
    label,
    disabled = false,
    variant = "filled",
    ...props
}: ButtonProps): ReactElement => {
    const style = {
        filled: { btn: styles.filledButton, text: styles.filledText },
        bordered: { btn: styles.borderedButton, text: styles.borderedText },
        disabled: { btn: styles.disabledButton, text: styles.disabledText },
    };

    return (
        <Button
            style={disabled ? style.disabled.btn : style[variant].btn}
            disabled={disabled}
            {...props}
        >
            <Text style={disabled ? style.disabled.text : style[variant].text}>{label}</Text>
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
    filledButton: {
        backgroundColor: colors.orange,
    },
    filledText: {
        color: colors.white,
    },
    borderedButton: {
        backgroundColor: colors.white,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: colors.orange,
        paddingTop: 14,
        paddingBottom: 14,
    },
    borderedText: {
        color: colors.orange,
    },
});
