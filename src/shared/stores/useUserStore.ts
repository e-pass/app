import { create } from "zustand";

import { IUser } from "@/shared/models";

interface IUserStore {
    user?: IUser;
    setUser: (data: IUser) => void;
}

export const useUserStore = () =>
    create<IUserStore>((set) => ({
        user: undefined,
        setUser: (data: IUser) =>
            set(() => ({
                user: data,
            })),
    }));
