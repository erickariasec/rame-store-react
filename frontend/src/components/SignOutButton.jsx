import React from "react";
import { useMsal } from "@azure/msal-react";
import "./SignOutButton.css"

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/" // redirects the top level app after logout
            });
        }
    }

    return (
        <span className="sign-out" onClick={() => handleLogout("popup")}>Cerrar Sesión</span>
    );
}