import styled from "styled-components/native";
import { colors } from "@/shared/constants";
import { type ReactElement, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TextInput, type TextInputProps } from "react-native";
import MaskInput from "react-native-mask-input";

const Body = styled.View`
    height: 66px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    background-color: #F5F1F3;
    border-radius: 16px;
    border-color: #F5F1F3;
    border-width: 1px;
    border-style: solid;
    color: #A39FA1;
`;

const Attention = styled.Image`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
`;

const Placeholder = styled.Text`
    position: absolute;
    left: 16px;
    color: ${colors.gray};
    font-size: 17px;
    z-index: 2;
    pointer-events: none;
`;

interface InputProps extends TextInputProps {
    isError?: boolean;
    placeholder: string;
    changedState?: (value: string) => void;
}


/** Primary Input | Accepts isError (true/false), and other props valid to TextInput  */
export const PrimaryInput = ({ isError = false, placeholder, changedState = () => {}, ...props }: InputProps): ReactElement => {
    const translateY = useRef(new Animated.Value(-8)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const [value, setValue] = useState<string>("");

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const changeIsFocused = (isFocus: boolean) => {
        setIsFocused((value !== "") ? true : isFocus);
    };

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isFocused ? -20 : -8,
            duration: 150,
            useNativeDriver: true,
        }).start();
        Animated.timing(scale, {
            toValue: isFocused ? 0.8 : 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
        Animated.timing(translateX, {
            toValue: isFocused ? 6 : 0,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }, [isFocused]);

    useEffect(() => {
        changedState(value);
    }, [value]);

    return (
        <Body>
            <Animated.View
                style={[styles.placeholderWrapper, {
                    transform: [{ translateY }, { scale }, { translateX }],
                }]}>
                <Placeholder>{placeholder}</Placeholder>
            </Animated.View>

            {props.textContentType === "telephoneNumber" ? (
                <MaskInput selectionColor="#8638E5" style={[styles.input, isError && styles.error, !isFocused && { opacity: 0 }]}
                           mask={["+", /\d/, " ", "(", /\d/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                           value={value} onChangeText={(unmasked) => {
                    setValue(unmasked);
                }} onFocus={() => {
                    changeIsFocused(true);
                }} onBlur={() => {
                    changeIsFocused(false);
                }} {...props} />
            ) : (
                <TextInput selectionColor="#8638E5" style={[styles.input, isError && styles.error]} value={value} onChangeText={setValue}
                           onFocus={() => {
                               changeIsFocused(true);
                           }} onBlur={() => {
                    changeIsFocused(false);
                }} {...props} />
            )}


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
    placeholderWrapper: {
        position: "relative",
    },
    input: {
        width: "100%",
        height: "100%",
        paddingTop: 31,
        paddingHorizontal: 16,
        paddingBottom: 11,
        fontSize: 17,
        borderWidth: 0,
    },
});
