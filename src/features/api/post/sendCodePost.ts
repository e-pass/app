import { api } from "@/shared/axios";

export const sendCodePost = async (phoneNumber: string): Promise<string | undefined> => {
    try {
        const response = await api.post("/auth/send-code/", {
            phone_number: phoneNumber.replace(/[^0-9+]/g, ""),
        });

        const { code } = response.data;

        console.log(code);

        return "Success";
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
