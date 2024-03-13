import { Container } from "@/shared/ui";
import { CoachSearch } from "@/widgets/CoachSearch";

const Coaches = () => {
    return (
        <Container>
            {/* <MainHeader title="Тренеры" isBackBtn isCloseBtn /> */}
            <CoachSearch />
        </Container>
    );
};

export default Coaches;
