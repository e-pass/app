import * as SecureStore from "expo-secure-store";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import type { IRegistrationFormData } from "@/pages/Registration";
import { api } from "@/shared/axios";

interface AuthState {
    token: string | null;
    authenticated: boolean | null;
}

interface AuthProps {
    authState?: AuthState;
    onRegister?: (data: IRegistrationFormData) => Promise<any>;
    onSendCode?: (phoneNumber: string) => Promise<any>;
    onVerifyCode?: (phoneNumber: string, code: number) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

const TOKEN_KEY = "access_token";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
        token: null,
        authenticated: null,
    });

    const clearPhoneNumber = (phoneNumber: string) => phoneNumber.replace(/[^0-9+]/g, "");

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);

            if (token) {
                api.defaults.headers.common.Authorization = `Bearer ${token}}`;

                setAuthState({
                    token,
                    authenticated: true,
                });
            }
        };

        loadToken();
    }, []);

    const register = async (data: IRegistrationFormData) => {
        try {
            await api.post("/user/", {
                phone_number: clearPhoneNumber(data.phoneNumber),
                first_name: data.firstname,
                last_name: data.lastname,
                is_trainer: data.isTrainer,
            });

            return 201;
        } catch (err) {
            return { error: true, msg: (err as any).response.data.msg };
        }
    };

    const sendCode = async (phoneNumber: string) => {
        try {
            const response = await api.post("/auth/send-code/", {
                phone_number: clearPhoneNumber(phoneNumber),
            });

            const { code } = response.data;

            console.log(code);

            return 200;
        } catch (err) {
            return { error: true, msg: (err as any).response.data.msg };
        }
    };

    const verifyCode = async (phoneNumber: string, code: number) => {
        try {
            const response = await api.post("/auth/verify-code/", {
                phone_number: phoneNumber,
                code,
            });

            const { access_token } = response.data;

            await SecureStore.setItemAsync(TOKEN_KEY, access_token);

            api.defaults.headers.common.Authorization = `Bearer ${access_token}}`;

            setAuthState({
                token: access_token,
                authenticated: true,
            });

            return response.data;
        } catch (err) {
            return { error: true, msg: (err as any).response.data.msg };
        }
    };

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            api.defaults.headers.common.Authorization = "";

            console.log("Success!");

            setAuthState({
                token: null,
                authenticated: false,
            });
        } catch (err) {
            return { error: true, msg: (err as any).response.data.msg };
        }
    };

    const value = {
        authState,
        onRegister: register,
        onSendCode: sendCode,
        onVerifyCode: verifyCode,
        onLogout: logout,
    };

    return (
        <AuthContext.Provider value={useMemo(() => value, [authState])}>
            {children}
        </AuthContext.Provider>
    );
};
