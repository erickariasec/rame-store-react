import React from "react";
import { Navbar } from "./Navbar";
import { GallerySwiper } from "./GallerySwiper";
import { ScrollUpButton } from "./ScrollUpButton";
import { CardsContainer } from "./CardsContainer";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    // const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <ScrollUpButton />
            <Navbar />
            <GallerySwiper />
            {props.children}
            <CardsContainer />
        </>
    );
};