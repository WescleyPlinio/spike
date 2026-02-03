import React, { useEffect, useState } from "react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 600) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow ${scrolled ? "bg-dark-custom" : "bg-transparent"}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-volleyball logo-accent me-2"></i>
                    Spike <span className="logo-accent">Cross</span> Fans
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Dublagem</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 