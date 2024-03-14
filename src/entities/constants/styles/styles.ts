import styled from "styled-components/native";

import { colors, fonts } from "@/shared/constants";

export const H1Mobile = styled.Text`
    font-family: ${fonts.NunitoSans_700};
    font-size: 34px;
    font-weight: 600;
    line-height: 36px;
`;

export const H2Mobile = styled.Text`
    font-family: ${fonts.NunitoSans_700};
    font-size: 21px;
    line-height: 28px;
`;

export const H3Mobile = styled.Text`
    font-family: ${fonts.NunitoSans_600};
    font-size: 17px;
    line-height: 24px;
`;

export const B1Mobile = styled.Text`
    font-family: ${fonts.NunitoSans};
    font-size: 17px;
    line-height: 22px;
`;

export const B2Mobile = styled.Text`
    font-family: ${fonts.NunitoSans};
    font-size: 15px;
    line-height: 16px;
`;

export const B2MobileBold = styled.Text`
    font-family: ${fonts.NunitoSans_700};
    font-size: 15px;
    line-height: 16px;
`;

export const B3Mobile = styled.Text`
    font-family: ${fonts.NunitoSans};
    font-size: 13px;
    line-height: 16px;
`;

export const B3MobileBold = styled.Text`
    font-family: ${fonts.NunitoSans_700};
    font-size: 13px;
    line-height: 16px;
`;

export const B4Mobile = styled.Text`
    font-family: ${fonts.NunitoSans};
    font-size: 10px;
    line-height: 14px;
`;

export const TextLink = styled.Text`
    font-family: ${fonts.NunitoSans_600};
    font-size: 15px;
    line-height: 15px;
    height: 16px;
    color: ${colors.action};
    text-decoration: underline;
`;

export const Subtitle = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    gap: 8px;
`;

export const Form = styled.View`
    gap: 24px;
    margin-top: 28px;
`;
