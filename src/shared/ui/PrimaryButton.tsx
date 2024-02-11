import styled from "styled-components/native";
import { type ReactElement } from "react";
import { palette } from "../const/palette";

const Button = styled.Pressable`
    width: 100%;
    padding: 16px;
    background-color: ${palette.orange};
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

interface IProps {
  title: string,
  onPress: () => void,
}

export const PrimaryButton = ({ title, onPress } : IProps): ReactElement => {
  return <Button onPress={onPress}>
    <Text>{title}</Text>
  </Button>;
};
