import { api } from "@/shared/axios";

export const sendCodePost = async (phoneNumber: string): Promise<number | undefined> => {
    try {
        const response = await api.post("/auth/send-code/", {
            phone_number: phoneNumber.replace(/[^0-9+]/g, ""),
        });

        const { code } = response.data;

        return code;
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
