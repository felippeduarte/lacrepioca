import React, { Component } from 'react';
import GMap from './GMap';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid p-0">
                    <div className="row m-0 align-items-center">
                        <div className="col-xs-12 col-lg-6 p-0">
                            <GMap />
                        </div>
                        <div className="col-xs-12 col-lg-6 p-5">
                            <div className="row">
                                <div className="col-xs-12 col-sm-7">
                                    <div className="col-xs-12">
                                        <h5>Onde Estamos</h5>
                                        <address>
                                            Rua Doutor Odilon Galoti, 371<br/>
                                            Estreito, Florianópolis<br/><br/>
                                            <ul className="fa-ul">
                                                <li><span className="fa-li" ><i className="fa fa-phone fa-lg"></i></span> <a href="tel:(48)99991-7142">(48) 99991-7142</a></li>
                                                <li><span className="fa-li" ><i className="fab fa-whatsapp fa-lg"></i></span> <a href="tel:(48)99991-7142">(48) 99991-7142</a></li>
                                                <li><span className="fa-li" ><i className="fab fa-facebook-messenger fa-lg"></i></span> <a href="https://m.me/lacrepioca" target="_blank"> Facebook Messenger</a></li>
                                                <li><span className="fa-li" ><i className="fa fa-envelope fa-lg"></i></span> <a href="mailto:lacrepioca@hotmail.com">lacrepioca@hotmail.com</a></li>
                                            </ul>
                                        </address>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-5">
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <h5>Nos sigam nas redes sociais</h5>
                                            <div className="text-center">
                                                <a className="btn btn-block btn-social btn-facebook" href="https://www.facebook.com/lacrepioca/" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>
                                                <a className="btn btn-block btn-social btn-instagram" href="https://www.instagram.com/lacrepioca/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright-container">
                    <div className="row justify-content-center copyright">
                        <div className="col-auto">
                            <p>Copyright © {(new Date()).getFullYear()} La Crepioca - Todos os direitos reservados</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}