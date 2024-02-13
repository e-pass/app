import styled from "styled-components/native";
import { palette } from "../const/palette";
import { type ReactElement } from "react";
import { type TextInputProps } from "react-native";

const Input = styled.TextInput`
    width: 100%;
    padding: 22px 16px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: ${palette.gray};
`;

interface InputProps extends TextInputProps {}

export const PrimaryInput = ({ ...props }: InputProps): ReactElement => {
    return <Input {...props} />;
};
