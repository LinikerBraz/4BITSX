import React from 'react';
import './header.css';

export function Header() {
return (
<section className="promo-header">
    <div className="promo-text">
    <h1 className="promo-title">
        <div className="line">
        <span className="title-word">Seu Futuro</span>
        <span className="title-block block-1"></span>
        </div>
        <div className="line">
        <span className="title-block block-2"></span>
        <span className="title-word gradient-text">começa aqui</span>
        </div>
    </h1>

    <p>
        Na <strong className="highlight">4Bits X</strong>, transformamos seus problemas em <span className="highlight">soluções</span>.<br />
        Com tecnologia, criatividade e propósito, fazemos o difícil parecer simples.<br />
        Porque resolver é o que fazemos de melhor.
    </p>
    </div>

    <div className="scroll-indicator">
    <span>↓</span>
    <p>Desça e descubra o que podemos criar juntos</p>
    </div>
</section>
);
}