import { type ReactElement, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TextInput, type TextInputProps } from "react-native";
import MaskInput from "react-native-mask-input";
import styled from "styled-components/native";

import { B3Mobile } from "@/entities/constants";
import { Attention } from "@/shared/assets";
import { colors } from "@/shared/constants";

const Body = styled.View`
    height: 66px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    background-color: ${colors.surface_fields};
    border-radius: 16px;
    border-color: ${colors.border_invert};
    border-width: 1px;
    border-style: solid;
    color: ${colors.paragraph_placeholder};
`;

const Placeholder = styled.Text`
    position: absolute;
    left: 16px;
    color: ${colors.paragraph_placeholder};
    font-size: 17px;
    z-index: 2;
    pointer-events: none;
`;

interface InputProps extends TextInputProps {
    isError?: boolean;
    errorMessage?: string;
    placeholder: string;
    changedState?: (value: string) => void;
}

const PHONE_MASK = [
    "+",
    /\d/,
    " ",
    "(",
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];

/** Primary Input | Accepts isError (true/false), and other props valid to TextInput  */
export const PrimaryInput = ({
    isError = false,
    errorMessage = "",
    placeholder,
    changedState = () => {},
    ...props
}: InputProps): ReactElement => {
    const translateY = useRef(new Animated.Value(-8)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const [value, setValue] = useState<string>("");

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const changeIsFocused = (isFocus: boolean) => {
        setIsFocused(value !== "" ? true : isFocus);
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
            toValue: isFocused ? -22 : 0,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }, [isFocused]);

    useEffect(() => {
        changedState(value);
    }, [value]);

    return (
        <>
            <Body>
                <Animated.View
                    style={[
                        styles.placeholderWrapper,
                        {
                            transform: [{ translateY }, { scale }, { translateX }],
                        },
                    ]}
                >
                    <Placeholder>{placeholder}</Placeholder>
                </Animated.View>

                {props.textContentType === "telephoneNumber" ? (
                    <MaskInput
                        numberOfLines={1}
                        selectionColor='#8638E5'
                        placeholder=''
                        style={[styles.input, isError && styles.error]}
                        mask={PHONE_MASK}
                        value={value}
                        onChangeText={(masked) => setValue(masked)}
                        onFocus={() => {
                            changeIsFocused(true);
                        }}
                        onBlur={() => {
                            changeIsFocused(false);
                        }}
                        {...props}
                    />
                ) : (
                    <TextInput
                        numberOfLines={1}
                        selectionColor='#8638E5'
                        style={[styles.input, isError && styles.error]}
                        value={value}
                        onChangeText={setValue}
                        onFocus={() => {
                            changeIsFocused(true);
                        }}
                        onBlur={() => {
                            changeIsFocused(false);
                        }}
                        {...props}
                    />
                )}

                {isError && <Attention style={styles.attention} />}
            </Body>

            {isError && (
                <B3Mobile style={{ color: colors.error_dark, marginTop: 8, marginHorizontal: 16 }}>
                    {errorMessage}
                </B3Mobile>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    error: {
        borderColor: `${colors.error}`,
        color: `${colors.error}`,
    },
    placeholderWrapper: {
        position: "absolute",
        width: 200,
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
    attention: {
        width: 24,
        height: 24,
        position: "absolute",
        right: 20,
    },
});
