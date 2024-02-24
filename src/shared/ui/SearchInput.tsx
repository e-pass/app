import { type FC } from "react";
import styled from "styled-components/native";
import { colors } from "src/shared/constants";

const Body = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    width: 100%;
    height: 36px;
    border-radius: 12px;
    padding: 0 10px;
    background-color: ${colors.lightGray};
    box-sizing: border-box;
`;

const Icon = styled.Image`
    width: 14px;
    height: 14px;
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: "rgba(0, 0, 0, .12)",
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

const SearchInput: FC = () => {
    return (
        <Body>
            <Icon source={require("@/assets/icons/search.png")} />
            <Input placeholder="Поиск" />
            <ClearButton>
                <Icon source={require("@/assets/icons/clear.png")} />
            </ClearButton>
        </Body>
    );
};

export default SearchInput;
