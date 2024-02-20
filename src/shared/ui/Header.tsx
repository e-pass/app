import { ReactNode } from "react";
import styled from "styled-components/native";
import Back from "@/assets/icons/arrow-left.svg";
import Close from "@/assets/icons/close-btn.svg";
import Dots from "@/assets/icons/three-dots.svg";
import Edit from "@/assets/icons/edit.svg";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

type HeaderProps = {
    children?: ReactNode;
    headerLayout: HeaderLayout;
    rightIcon?: "close" | "edit" | "dots" | "avatar";
};

type HeaderLayout = {
    leftIcon?: boolean;
    rightIcon?: boolean;
};

const Header = ({ children, headerLayout, rightIcon }: HeaderProps) => {
    let rightIco;
    switch (rightIcon) {
        case "close":
            rightIco = <Close width={32} height={32} />;
            break;

        case "edit":
            rightIco = <Edit width={32} height={32} />;
            break;

        case "dots":
            rightIco = <Dots width={32} height={32} />;
            break;

        case "avatar":
            rightIco = (
                <Image style={styles.avatar} source={require("@/assets/images/user-avatar.jpg")} />
            );
            break;
    }

    return (
        <StyledHeader>
            {headerLayout.leftIcon ? (
                <TouchableOpacity>
                    <Back width={32} height={32} />
                </TouchableOpacity>
            ) : (
                <View style={[styles.iconWrapper, { opacity: 0 }]}></View>
            )}
            {children}
            {headerLayout.rightIcon ? (
                <TouchableOpacity style={[styles.iconWrapper]}>{rightIco}</TouchableOpacity>
            ) : (
                <View style={[styles.iconWrapper, { opacity: 0 }]}></View>
            )}
        </StyledHeader>
    );
};

const StyledHeader = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-vertical: 8px;
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
