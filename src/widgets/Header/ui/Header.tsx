import React, { type FC, type ReactNode, useMemo } from "react";
import styled from "styled-components/native";
import { Back, Close, Edit, ThreeDots } from "@/assets/icons";
import { View, StyleSheet, Image, TouchableOpacity, type ViewProps } from "react-native";

interface HeaderProps extends ViewProps {
    headerLayout?: HeaderLayout;
    rightIcon?: "close" | "edit" | "dots" | "avatar";
    pressRight?: () => void;
    pressLeft?: () => void;
}

interface HeaderLayout {
    leftIcon?: boolean;
    rightIcon?: boolean;
}

const Header: FC<HeaderProps> = ({
    children,
    headerLayout = { leftIcon: true, rightIcon: true },
    rightIcon,
    pressRight,
    pressLeft,
    ...props
}) => {
    const rightIco = useMemo(
        () =>
            new Map([
                ["close", <Close width={32} height={32} key="close" />],
                ["edit", <Edit width={32} height={32} key="edit" />],
                ["dots", <ThreeDots width={32} height={32} key="dots" />],
                [
                    "avatar",
                    <Image
                        style={styles.avatar}
                        source={require("@/assets/images/user-avatar.png")}
                        key="avatar"
                    />,
                ],
            ]),
        [],
    );

    const getIconLayout = (type: "left" | "right", value: boolean): ReactNode => {
        const layout = new Map([
            [
                "left",
                <TouchableOpacity onPress={pressLeft} key="left">
                    <Back width={32} height={32} />
                </TouchableOpacity>,
            ],
            [
                "right",
                <TouchableOpacity style={[styles.iconWrapper]} onPress={pressRight} key="right">
                    {rightIco.get(rightIcon as string)}
                </TouchableOpacity>,
            ],
            ["empty", <View style={[styles.iconWrapper, { opacity: 0 }]} key="empty" />],
        ]);

        if (value) return layout.get(type);

        return layout.get("empty");
    };

    return (
        <StyledHeader {...props}>
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
        width: 32,
        height: 32,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
});

export default Header;
