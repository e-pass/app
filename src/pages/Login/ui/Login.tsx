import { StatusBar } from "react-native";
import { colors } from "src/shared/constants";

import LoginForm from "@/features/auth/ui/LoginForm";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";

const Login = ({ navigation }: { navigation: any }) => {
    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header headerLayout={{ rightIcon: true }} rightIcon='close' />
            <LoginForm navigation={navigation} />
        </Container>
    );
};

export default Login;
