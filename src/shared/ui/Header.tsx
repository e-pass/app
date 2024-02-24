import { type ReactNode } from "react";
import styled from "styled-components/native";
import Back from "@/assets/icons/arrow-left.svg";
import Close from "@/assets/icons/close-btn.svg";
import Dots from "@/assets/icons/three-dots.svg";
import Edit from "@/assets/icons/edit.svg";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type RightIcon = "close" | "edit" | "dots" | "avatar";

interface HeaderLayout {
    leftIcon?: boolean;
    rightIcon?: boolean;
}

interface HeaderProps {
    children?: ReactNode;
    headerLayout: HeaderLayout;
    rightIcon?: RightIcon;
}

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
            rightIco = (<Image style={styles.avatar} source={require("@/assets/images/user-avatar.jpg")} />);
            break;
    }

    return (
        <StyledHeader>
            {(headerLayout.leftIcon === true) ? (
                <TouchableOpacity>
                    <Back width={32} height={32} />
                </TouchableOpacity>
            ) : (<View style={[styles.iconWrapper, { opacity: 0 }]}></View>)}
            {children}
            {(headerLayout.rightIcon === true) ? (
                <TouchableOpacity style={[styles.iconWrapper]}>{rightIco}</TouchableOpacity>) : (
                <View style={[styles.iconWrapper, { opacity: 0 }]}></View>)}
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
        display: "flex", justifyContent: "center", alignItems: "center",
    }, avatar: {
        width: 32, height: 32, borderRadius: 50,
    },
});

export default Header;
