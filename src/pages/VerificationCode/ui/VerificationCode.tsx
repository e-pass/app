import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Pressable, ScrollView, StatusBar, StyleSheet, Vibration } from "react-native";
import styled from "styled-components/native";

import { Logo } from "@/assets/icons";
import { sendCodePost, verifyCodePost } from "@/features/api";
import { type IDigit } from "@/pages/Registration/models/IDigit";
import { B2Mobile, B3Mobile, colors, H1Mobile } from "@/shared/constants";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";

const CodeContainer = styled.View`
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 42px;
    position: relative;
`;

const Block = styled.View`
    width: 62px;
    height: 66px;
    border-radius: 12px;
    background: ${colors.smokyWhite};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BlockText = styled.Text`
    font-size: 21px;
    font-weight: 700;
    line-height: 28px;
`;

const TransparentInput = styled.TextInput`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
`;

const Digit = ({
    value,
    isActive,
    isError,
}: {
    value: string;
    isActive: boolean;
    isError: boolean;
}) => {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    delay: 500,
                    duration: 0,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    delay: 500,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [isActive]);

    return (
        <Block>
            <Animated.View
                style={[styles.cursor, { opacity }, { display: isActive ? "flex" : "none" }]}
            />
            <BlockText style={{ color: isError ? colors.darkRed : colors.black }}>
                {value}
            </BlockText>
        </Block>
    );
};

const TIMER_SECONDS = 60;

const VerificationCode = ({ route, navigation }: { route: any; navigation: any }) => {
    const { phoneNumber } = route.params;

    const [countdown, setCountdown] = useState<number>(TIMER_SECONDS);
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const sendCode = async () => {
        if (!phoneNumber) return;

        const response = await sendCodePost(phoneNumber);

        if (!response) {
            alert("Error");
            return;
        }

        setCountdown(TIMER_SECONDS);

        const interval = setInterval(() => {
            setCountdown((prevState) => {
                if (prevState === 0) clearInterval(interval);
                return prevState - 1;
            });
        }, 1000);
    };

    const checkCode = async () => {
        const response = await verifyCodePost(phoneNumber, +value);

        if (!response) {
            setIsError(true);
            return;
        }

        navigation.replace("Coaches");
    };

    const digits: IDigit[] = useMemo(() => {
        const items: IDigit[] = [];

        value
            .padEnd(4, " ")
            .split("")
            .forEach((item, index) => {
                items.push({
                    value: item,
                    isActive: value.length === index,
                });
            });

        return items;
    }, [value, isInputFocus]);

    useEffect(() => {
        if (value.length === 4) checkCode();
        else setIsError(false);
    }, [value]);

    useEffect(() => {
        sendCode();
    }, []);

    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />

                <Header
                    navigation={navigation}
                    headerLayout={{ rightIcon: true, leftIcon: true }}
                    rightIcon='close'
                />
                <Logo style={{ marginTop: 20, marginBottom: 32 }} width={200} height={43} />

                <H1Mobile>Подтвердите номер телефона</H1Mobile>
                <B2Mobile style={{ marginTop: 12 }}>
                    Мы отправили код на номер {phoneNumber}.
                </B2Mobile>

                <CodeContainer>
                    <TransparentInput
                        onFocus={() => {
                            setIsInputFocus(true);
                        }}
                        onBlur={() => {
                            setIsInputFocus(false);
                        }}
                        onChangeText={setValue}
                        maxLength={4}
                        keyboardType='number-pad'
                        textContentType='oneTimeCode'
                    />

                    {digits.map((item, index) => (
                        <Digit
                            key={index}
                            isError={isError}
                            value={item.value}
                            isActive={item.isActive && isInputFocus}
                        />
                    ))}
                </CodeContainer>

                {isError && (
                    <B3Mobile style={{ marginTop: 8, color: colors.red }}>
                        Код введён неверно. Проверьте правильность ввода.
                    </B3Mobile>
                )}

                {countdown < 0 ? (
                    <Pressable onPress={sendCode}>
                        <B2Mobile style={{ marginTop: 24 }}>
                            Не пришёл код? Запросить ещё раз.
                        </B2Mobile>
                    </Pressable>
                ) : (
                    <B2Mobile style={{ marginTop: 24 }}>
                        Не пришёл код? Запросить код ещё раз через {"\n"}
                        {countdown} секунд.
                    </B2Mobile>
                )}
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    cursor: {
        width: 2,
        height: 21,
        backgroundColor: colors.purple,
        position: "absolute",
    },
});

export default VerificationCode;
