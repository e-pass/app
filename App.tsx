import { StatusBar } from "react-native";
import { type ReactElement } from "react";

import { Container } from "./src/shared/ui/Container";

const App = (): ReactElement => {
    return (
        <Container>
            <StatusBar />
        </Container>
    );
};

export default App;
