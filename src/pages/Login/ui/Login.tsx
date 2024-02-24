import { type FC } from "react";
import { Container } from "@/shared/ui";
import { StatusBar } from "react-native";
import { Header } from "@/widgets/Header";
import { colors } from "src/shared/constants";
import LoginForm from "@/features/auth/ui/LoginForm";

const Login: FC = () => {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
            <Header headerLayout={{ rightIcon: true }} rightIcon="close"></Header>
            <LoginForm />
        </Container>
    );
};

export default Login;
