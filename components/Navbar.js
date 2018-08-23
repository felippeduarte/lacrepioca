import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="navbar-brand mr-auto" href="#"><img src="assets/img/logo.png" className="navbar-image" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> Início</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> Menu</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-info fa-lg"></span> Onde Estamos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-address-card fa-lg"></span> Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}