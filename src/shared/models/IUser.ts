export interface IUser {
    id: number;
    phone_number: string;
    first_name: string;
    last_name: string;
    is_trainer: boolean;
    is_phone_number_verified: boolean;
    created_at: string;
    updated_at: string;
    avatar?: any;
}
