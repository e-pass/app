import React, { type FC, type ReactNode, useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity as Touch, View } from "react-native";
import styled from "styled-components/native";

import { ArrowLeft, Close, Edit, ThreeDots } from "@/shared/assets";

interface HeaderProps extends React.PropsWithChildren {
    headerLayout?: HeaderLayout;
    rightIcon?: "close" | "edit" | "dots" | "avatar";
    navigation?: any;
}

interface HeaderLayout {
    leftIcon?: boolean;
    rightIcon?: boolean;
}

const Header: FC<HeaderProps> = ({
    children,
    headerLayout = { leftIcon: true, rightIcon: true },
    rightIcon,
    navigation,
}) => {
    const rightIco = useMemo(
        () =>
            new Map([
                ["close", <Close width={32} height={32} key='close' />],
                ["edit", <Edit width={32} height={32} key='edit' />],
                ["dots", <ThreeDots width={32} height={32} key='dots' />],
                [
                    "avatar",
                    <Image
                        style={styles.avatar}
                        source={require("@/shared/assets/images/user-avatar.jpg")}
                        key='avatar'
                    />,
                ],
            ]),
        [],
    );

    const getIconLayout = (type: "left" | "right", value: boolean): ReactNode => {
        const layout = new Map([
            [
                "left",
                <Touch
                    key='left'
                    onPress={() => {
                        if (navigation !== undefined) navigation.goBack();
                    }}
                >
                    <ArrowLeft width={32} height={32} />
                </Touch>,
            ],
            [
                "right",
                <Touch style={[styles.iconWrapper]} key='right'>
                    {rightIco.get(rightIcon as string)}
                </Touch>,
            ],
            ["empty", <View style={[styles.iconWrapper, { opacity: 0 }]} key='empty' />],
        ]);

        if (value) return layout.get(type);

        return layout.get("empty");
    };

    return (
        <StyledHeader>
            {getIconLayout("left", Boolean(headerLayout.leftIcon))}
            {children}
            {getIconLayout("right", Boolean(headerLayout.rightIcon))}
        </StyledHeader>
    );
};

const StyledHeader = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 8px 0;
    align-items: center;
`;

const styles = StyleSheet.create({
    iconWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
});

export default Header;
