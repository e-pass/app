import styled from "styled-components/native";
import { colors } from "@/shared/const";
import { type ReactElement } from "react";
import { StyleSheet, type TextInputProps } from "react-native";

const Input = styled.TextInput`
    width: 100%;
    padding: 22px 16px;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.gray};
`;

const Body = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const Attention = styled.Image`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
`;

interface InputProps extends TextInputProps {
    isError?: boolean;
}

/** Primary Input | Accepts isError (true/false), and other props valid to TextInput  */
export const PrimaryInput = ({ isError = false, ...props }: InputProps): ReactElement => {
    return (
        <Body>
            <Input style={isError && styles.error} {...props} />
            <Attention
                source={{
                    uri: "./attention.png",
                }}
            />
        </Body>
    );
};

const styles = StyleSheet.create({
    error: {
        borderColor: `${colors.red}`,
        color: `${colors.red}`,
    },
});
