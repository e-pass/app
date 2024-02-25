import styled from "styled-components/native";
import { B2Mobile } from "@/shared/constants";
import { Checked } from "@/assets/icons";

interface Props {
    isChecked: boolean,
    changeChecked: () => void;
    text: string
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
    background-color: rgb(233, 229, 231);
`;

const Checkbox = ({ isChecked, changeChecked, text }: Props) => {
    return (
        <Element onPress={changeChecked}>
            <Box style={{ backgroundColor: isChecked ? "#ED6337" : "#E9E5E7" }}>
                {isChecked && <Checked width={16} height={16} />}
            </Box>
            <B2Mobile>{text}</B2Mobile>
        </Element>
    );
};

export default Checkbox;