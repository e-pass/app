import { type IRegistrationFormData } from "@/pages/Registration";
import { api } from "@/shared/axios";

type IData = {
    isTrainer: boolean;
} & IRegistrationFormData;

export const registrationPost = async (data: IData) => {
    try {
        await api.post("/user/", {
            phone_number: data.phoneNumber.replace(/[^0-9+]/g, ""),
            first_name: data.firstname,
            last_name: data.lastname,
            is_trainer: data.isTrainer,
        });
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
