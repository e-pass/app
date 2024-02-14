import { StatusBar } from "react-native";
import { type ReactElement } from "react";

import { Container } from "./src/shared/ui/Container";
import { PrimaryInput } from "./src/shared/ui/PrimaryInput";
import { PrimaryButton } from "./src/shared/ui/PrimaryButton";
import { PrimaryTitle } from "./src/shared/ui/PrimaryTitle";

const App = (): ReactElement => {
    return (
        <Container>
            <PrimaryTitle>Hello world!</PrimaryTitle>
            <PrimaryInput isError placeholder={"Hello world!"} />
            <PrimaryButton label="Hello world!" />
            <StatusBar />
        </Container>
    );
};

export default App;
