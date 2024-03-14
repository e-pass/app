import React, { type ReactElement, useMemo, useState } from "react";
import { type PressableProps, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { colors } from "@/shared/constants";

interface ButtonProps extends PressableProps {
    label: string;
    disabled?: boolean;
}

/** Primary Button | Accepts label (string), and other props valid to Pressable  */
export const PrimaryButton = ({ label, disabled = false, ...props }: ButtonProps): ReactElement => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleHover = (hover: boolean) => {
        setIsHover(hover);
    };

    const currentStyles = useMemo(() => {
        if (disabled) return styles.disabledButton;
        if (isHover) return styles.hover;
        return undefined;
    }, [isHover, disabled]);

    return (
        <Button
            {...props}
            onPressIn={() => handleHover(true)}
            onPressOut={() => handleHover(false)}
            style={currentStyles}
            disabled={disabled}
        >
            <Text style={disabled && styles.disabledText}>{label}</Text>
        </Button>
    );
};

const Button = styled.Pressable`
    width: 100%;
    padding: 16px;
    background-color: ${colors.button_default};
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

const styles = StyleSheet.create({
    disabledButton: {
        backgroundColor: colors.button_disabled,
    },
    disabledText: {
        color: colors.paragraph_invert,
    },
    hover: {
        backgroundColor: colors.button_hover,
    },
});
