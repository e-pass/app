import styled from "styled-components/native";
import { colors } from "@/shared/const";

export const StyledTitle = styled.Text`
    font-family: NunitoSans-Bold;
    font-size: 34px;
    margin-bottom: 12px;
`;

export const ExtraView = styled.View`
    flex-direction: row;
    column-gap: 8px;
    margin-bottom: 42px;
    align-items: center;
`;

export const ExtraText = styled.Text`
    font-size: 15px;
    font-family: NunitoSans-Regular;
`;

export const TextLink = styled.TouchableOpacity`
    //border-bottom: 1px solid ${colors.violet};
`;

export const TextLinkContent = styled.Text`
    color: ${colors.violet};
    font-size: 15px;
    text-decoration: underline;
`;
