import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom fixed-top shadow">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="bi bi-puzzle-fill me-2 logo-accent"></i>
                    Spike <span className="logo-accent">Cross</span> Fans
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Início</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 