import styled from "styled-components/native";

import { B2Mobile } from "@/entities/constants";
import { Checked } from "@/shared/assets";
import { colors } from "@/shared/constants";

interface Props {
    isChecked: boolean;
    changeChecked: (state: boolean) => void;
    text: string;
}

const Element = styled.Pressable`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    max-width: 80%;
`;

const Box = styled.View`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black_100};
`;

export const Checkbox = ({ isChecked, changeChecked, text }: Props) => {
    return (
        <Element onPress={() => changeChecked(!isChecked)}>
            <Box style={{ backgroundColor: isChecked ? colors.button_default : colors.black_100 }}>
                {isChecked && <Checked width={16} height={16} />}
            </Box>
            <B2Mobile>{text}</B2Mobile>
        </Element>
    );
};
