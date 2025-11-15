import React from 'react';
import './navbar.css';

export function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
      {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
        <img
            src="./img3.png"
            alt="Logo 4 Bits X"
            className="logo"
        />
        </a>

      {/* BOTÃO MOBILE */}
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

      {/* LINKS */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Equipe</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <span><a className="nav-link" id="contatos" href="#">Contatos</a></span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}