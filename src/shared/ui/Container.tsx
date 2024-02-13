import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

const Screen = styled.View`
    display: flex;
    width: 100vw;
    height: 100%;
    padding: 16px;
    min-width: 100vw;
`;

export const Container = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <SafeAreaView>
            <Screen>{children}</Screen>
        </SafeAreaView>
    );
};
