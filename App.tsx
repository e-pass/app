import { StatusBar } from "react-native";
import { type ReactElement } from "react";

import { Container } from "./src/shared/ui/Container";
import { PrimaryInput } from "./src/shared/ui/PrimaryInput";
import { PrimaryButton } from "./src/shared/ui/PrimaryButton";
import { PrimaryTitle } from "./src/shared/ui/PrimaryTitle";

const App = (): ReactElement => {
    return (
        <Container>
            <PrimaryTitle>Title</PrimaryTitle>
            <PrimaryInput placeholder={"sss"} />
            <PrimaryButton label="Привет мир" />
            <StatusBar />
        </Container>
    );
};

export default App;
