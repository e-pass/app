import { type FC } from "react";
import { CoachSearch } from "@/widgets/CoachSearch";
import { Container } from "@/shared/ui";

const Coaches: FC = () => {
    return (
        <Container>
            {/* <MainHeader title="Тренеры" isBackBtn isCloseBtn /> */}
            <CoachSearch />
        </Container>
    );
};

export default Coaches;
