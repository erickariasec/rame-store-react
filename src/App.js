import "./App.css";
import "swiper/css/bundle";
import "./components/GallerySwiper.css";

import { PageLayout } from "./components/PageLayout";
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
    useMsal,
} from "@azure/msal-react";

function ProfileContent() {
    const { accounts } = useMsal();

    const name = accounts[0] && accounts[0].name;

    return (
        <>
            <h5 className="welcome-msg">Bienvenido/a {name}</h5>
        </>
    );
};

function App() {
    
    return (
        <div className="body">
            <PageLayout>
                <AuthenticatedTemplate>
                    <ProfileContent />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <p className="welcome-msg"></p>
                </UnauthenticatedTemplate>
            </PageLayout>
        </div>
    );
}

export default App;
