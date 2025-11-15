import React from 'react';
import '../navbar/navbar.css'; 
import { Navbar } from '../navbar/';
import { Header } from '../header/';
import { StarBackground } from '../star/';

export function HeaderSection() {
    return (
    <div className="header-container">
        <StarBackground />
        <Navbar />
        <Header />
    </div>
    );
}