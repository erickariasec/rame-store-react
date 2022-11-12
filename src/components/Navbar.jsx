import "./Navbar.css"
import ITILogo from "../iti-logo-letters-red.png"

export const Navbar = () => (
    <>
        <header className="navbar">
            <div className="max-width">
                <a href="http://localhost:3000/">
                    <img src={ITILogo} className="logo-iti" alt="Logo ITI" />
                </a>
                <ul className="menu">
                    <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to Ramé home page">Home</a></li>
                    <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to Ramé men's clothing page">Men</a></li>
                    <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to Ramé women's clothing page">Women</a></li>
                    <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to Ramé jewelery page">Jewelery</a></li>
                    <li><a href="http://localhost:3000/" className="menu-btn" aria-label="Go to Ramé electronics page">Electronics</a></li>
                </ul>
                <div className="menu-btn bars-btn" aria-label="Press here to see menu button" role="button">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    </>
);
