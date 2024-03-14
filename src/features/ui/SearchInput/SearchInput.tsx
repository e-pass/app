import { type FC } from "react";
import styled from "styled-components/native";

import { Close, Search } from "@/shared/assets";
import { colors } from "@/shared/constants";

const Body = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    width: 100%;
    height: 36px;
    border-radius: 12px;
    padding: 0 10px;
    background-color: ${colors.paragraph_invert};
    box-sizing: border-box;
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.paragraph_placeholder,
})`
    flex: 1;
    width: 100%;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.41px;
`;

const ClearButton = styled.Pressable`
    width: 16px;
    height: 16px;
`;

export const SearchInput: FC = () => {
    return (
        <Body>
            <Search width={16} />
            <Input placeholder='Поиск' />
            <ClearButton>
                <Close width={16} />
            </ClearButton>
        </Body>
    );
};
