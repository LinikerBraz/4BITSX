import React from 'react';
import './equipe.css';

export function Equipe() {
    return (
    <>
<div className="equipe-titulo">
    <h1>
        Nossa <br/>
        <span className="t1">Equipe</span>
    </h1>
</div>
        <div className="equipe-grid">
            <div className="card">
                <img src="./luiz2.jpeg" alt="Uma foto de Luiz Liniker - CEO" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> Luiz <br /> <span className="t1"> Liniker </span> </h5>
                    <p className="card-text"> CEO - FrontEnd Developer </p>
                </div>
            </div>
            <div className="card">
                <img src="./glauber.jpeg" alt="Uma foto de Luiz Liniker - CEO" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> Glauber <br/> <span className="t1"> Ribeiro </span> </h5>
                    <p className="card-text"> CGO – Growth & Marketing </p>
                </div>
            </div>
            <div className="card">
                <img src="./caio.jpeg" alt="Uma foto de Luiz Liniker - CEO" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> Caio <br /> <span className="t1"> Lima </span> </h5>
                    <p className="card-text"> CTO - Backend Developer </p>
                </div>
            </div>
            <div className="card">
                <img src="./matheus.jpeg" alt="Uma foto de Luiz Liniker - CEO" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> Matheus <br /> <span className="t1"> Bento </span> </h5>
                    <p className="card-text"> CDO – Design & FrontEnd </p>
                </div>
            </div>
        </div>
    </>
    )
}