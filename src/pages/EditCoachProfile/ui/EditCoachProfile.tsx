import React from "react";
import { Container } from "@/shared/ui";
import EditProfileForm from "@/features/edit-profile/ui/EditProfileForm";
import { Header } from "@/widgets/Header";
import { H3Mobile } from "@/shared/constants";

const EditCoachProfile = ({ navigation }: { navigation: any }) => {
    return (
        <Container>
            <Header
                headerLayout={{ rightIcon: true }}
                rightIcon="close"
                pressRight={() => navigation.goBack()}
                style={{ marginBottom: 16 }}>
                <H3Mobile>Редактировать</H3Mobile>
            </Header>
            <EditProfileForm />
        </Container>
    );
};

export default EditCoachProfile;
