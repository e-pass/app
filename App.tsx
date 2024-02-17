import { type ReactElement } from "react";
import { StyledContainer, PrimaryTitle, PrimaryButton } from "./src/shared/ui";

const App = (): ReactElement => {
    return (
        <StyledContainer style={{ paddingTop: 50 }}>
            <PrimaryTitle>Title</PrimaryTitle>
            <PrimaryButton label={"Btn"} />
        </StyledContainer>
    );
};

export default App;
