import { type ReactElement, type ReactNode } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { colors } from "../const/colors";

// export const Container = ({ children }: { children: ReactNode }): ReactElement => {
//     return (
//         <SafeAreaView>
//             <Screen>{children}</Screen>
//         </SafeAreaView>
//     );
// };

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    padding-horizontal: 16px;
    padding-bottom: 28px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;
