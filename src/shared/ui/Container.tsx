import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

const Screen = styled.View`
    display: flex;
    height: 100%;
    padding: 16px;
`;

export const Container = ({ children }: {children: ReactNode}): ReactElement => {
  return <SafeAreaView>
    <Screen>
      {children}
    </Screen>
  </SafeAreaView>;
};

