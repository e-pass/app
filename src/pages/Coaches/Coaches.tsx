import { type FC } from "react";
import { CoachSearch } from "../../widgets/CoachSearch";
import { View } from "react-native";

const Coaches: FC = () => {
    return (
        <View>
            {/* <MainHeader title="Тренеры" isBackBtn isCloseBtn /> */}
            <CoachSearch />
        </View>
    );
};

export default Coaches;
