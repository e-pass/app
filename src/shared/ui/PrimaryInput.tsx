import styled from "styled-components/native";
import { palette } from "../const/palette";
import { type ReactElement } from "react";

const Input = styled.TextInput`
    width: 100%;
    padding: 22px 16px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: ${palette.gray};
`;

export const PrimaryInput = (): ReactElement => {
  return <Input placeholder="useless placeholder"  />;
};