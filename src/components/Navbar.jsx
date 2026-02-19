import React, { useEffect, useState } from "react"
import { Link, useMatch } from 'react-router-dom'

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

    const pageIndex = useMatch('/');
    const pageDubs = useMatch('/dubs');

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "bg-primary-custom shadow shadow-lg" : "bg-transparent pt-5"}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${ pageIndex ? 'active border-bottom': '' }`} to='/'>Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${ pageDubs ? 'active border-bottom' : '' }`} to='/dubs'>Dublagem</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link'} to='/'>Sobre nós</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 