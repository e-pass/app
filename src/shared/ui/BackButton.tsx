import { type FC } from "react";
import styled from "styled-components/native";
import { type ButtonProps, type DimensionValue } from "react-native";

const Button = styled.Pressable`
    width: 24px;
    height: 24px;
`;

const Icon = styled.Image`
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
const BackButton: FC<Props> = (
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
            <Icon source={require("@/assets/icons/back.png")} />
        </Button>
    );
};

export default BackButton;