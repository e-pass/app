import { type FC } from "react";
import styled from "styled-components/native";
import { type ButtonProps, type DimensionValue } from "react-native";
import CloseIcon from "@/assets/icons/close-btn.svg";

const Button = styled.Pressable`
    width: 24px;
    height: 24px;
`;
interface Props extends ButtonProps {
    onPress: (() => void) | undefined;
    position?: "absolute" | "relative" | undefined;
    top?: DimensionValue | undefined;
    left?: DimensionValue | undefined;
    right?: DimensionValue | undefined;
    bottom?: DimensionValue | undefined;
}

export const CloseButton: FC<Props> = (
    {
        onPress,
        position = "absolute",
        top,
        left,
        right,
        bottom,
    }) => {
    return (
        <Button style={{ position, top, left, right, bottom }} onPress={onPress}>
            <CloseIcon width={14} height={14} />
        </Button>
    );
};

