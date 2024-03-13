import { api } from "@/shared/axios";

export const verifyCodePost = async (phoneNumber: string) => {
    try {
        await api.post("/auth/verify-code/", {
            phone_number: phoneNumber,
        });
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
