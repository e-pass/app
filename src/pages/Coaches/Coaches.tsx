import { type FC } from "react";
import { MainHeader } from "../../widgets/MainHeader";
import { CoachSearch } from "../../widgets/CoachSearch";
import { View } from "react-native";

const Coaches: FC = () => {
    return (
        <View>
            <MainHeader title="Тренеры" isBackBtn isCloseBtn />
            <CoachSearch />
        </View>
    );
};

export default Coaches;
