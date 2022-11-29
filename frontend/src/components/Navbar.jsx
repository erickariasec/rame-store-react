import "./Navbar.css"
import ITILogo from "../iti-logo-letters-red.png"
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";


export const Navbar = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <header className="navbar">
                <div className="max-width">
                    <a href="http://localhost:3000/">
                        <img src={ITILogo} className="logo-iti" alt="Logo ITI" />
                    </a>
                    <ul className="menu">
                        <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to ITI home page">Home</a></li>
                        <li><a href="http://localhost:8800/productsByCategory/" className="menu-btn" aria-label="Go to ITI men's clothing page">Ropa Casual</a></li>
                        <li><a href="http://localhost:8800/productsByCategory/" className="menu-btn" aria-label="Go to ITI women's clothing page">Ropa Deportiva</a></li>
                        <li><a href="http://localhost:8800/productsByCategory/" className="menu-btn" aria-label="Go to ITI jewelery page">Salud</a></li>
                        <li><a href="http://localhost:8800/productsByCategory/" className="menu-btn" aria-label="Go to ITI electronics page">Uniformes</a></li>
                        <li><a href="http://localhost:8800/productsByCategory/" className="menu-btn" aria-label="Go to ITI electronics page">Calzado</a></li>
                        <li>{ isAuthenticated ? <SignOutButton /> : <SignInButton /> }</li>
                    </ul>
                    <div className="menu-btn bars-btn" aria-label="Press here to see menu button" role="button">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
};
