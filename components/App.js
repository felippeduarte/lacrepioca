import React, { Component } from 'react';
import '../assets/css/app.css';
import Header from './Header';
import Footer from './Footer';
import InstaGallery from './InstaGallery';
import Cardapio from './Cardapio';
import crepe from '../assets/img/crepe.jpg';
import tapioca from '../assets/img/tapioca.jpg';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="body-row">
                    <div className="row m-0">
                        <div className="col-xs-12 col-sm-6 p-0 order-12 order-sm-1">
                            <img src={crepe} className="mh-100 mw-100 image-produtos" alt="Crepe" />
                        </div>
                        <div className="col-xs-12 col-sm-6 order-1 order-sm-12">
                            <div className="row align-items-center h-100">
                                <div className="box-produtos">
                                    <div className="text-produtos">
                                        <h2>Crepe</h2>
                                        <p>O crepe, palavra que vem do francês crêpe, derivada do latim crispus, que significa crespo, é um tipo de panqueca feito a base de farinha de trigo, leite e ovos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 align-items-center">
                        <div className="col-xs-12 col-sm-6">
                            <div className="row align-items-center h-100">
                                <div className="box-produtos">
                                    <div className="text-produtos">
                                        <h2>Tapioca</h2>
                                        <p>Tapioca ou goma é a fécula extraída da mandioca, usualmente preparada em forma granulada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 p-0">
                            <img src={tapioca} className="mh-100 mw-100 image-produtos" alt="Tapioca" />
                        </div>
                    </div>
                </div>
                <Cardapio />
                <div className="instafeed-row">
                    <div className="container-fluid">
                        <div className="row row-umaviagemnossabores">
                            <div className="col text-center p-4">
                                <h1>#umaviagemnossabores</h1>
                            </div>
                        </div>
                        <div className="row p-5" id="instafeed">
                            <InstaGallery instafeedTarget="instafeed"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};
