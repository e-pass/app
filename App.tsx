import { StatusBar } from "react-native";
import { type ReactElement } from "react";

import { StyledContainer } from "./src/shared/ui/Container";
import { PrimaryTitle } from "./src/shared/ui/PrimaryTitle";
import { PrimaryButton } from "./src/shared/ui/PrimaryButton";

const App = (): ReactElement => {
    return (
        <StyledContainer style={{ paddingTop: 50 }}>
            <PrimaryTitle>Title</PrimaryTitle>
            <PrimaryButton label={"Btn"} />
        </StyledContainer>
    );
};

export default App;
