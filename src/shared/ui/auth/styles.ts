import styled from "styled-components/native";
import { colors } from "../../const/colors";

export const StyledTitle = styled.Text`
    font-family: NunitoSans-Bold;
    font-size: 34px;
    margin-bottom: 12px;
`;

export const ExtraView = styled.View`
    flex-direction: row;
    column-gap: 8px;
    margin-bottom: 42px;
`;

export const ExtraText = styled.Text`
    padding-top: 1px;
    font-size: 15px;
    font-family: NunitoSans-Regular;
`;

export const TextLink = styled.TouchableOpacity`
    border-bottom: 1px solid ${colors.blue};
`;

export const TextLinkContent = styled.Text`
    color: ${colors.blue};
    font-size: 15px;
    text-decoration: underline;
`;
