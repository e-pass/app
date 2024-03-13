import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "@/shared/axios";

export const verifyCodePost = async (phoneNumber: string, code: number) => {
    try {
        const response = await api.post("/auth/verify-code/", {
            phone_number: phoneNumber,
            code,
        });

        await AsyncStorage.setItem("access_token", response.data.access_token);

        return response.data;
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
