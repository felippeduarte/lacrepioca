import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

export default class Header extends Component {
    render() {
        const caption = (
            <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                <img src={logo} className="img-fluid" />
            </div>
        );

        return (
            <header>
                <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel" data-interval="10000">
                    <div className="carousel-inner">
                        <div className="carousel-item align-items-center flex-column p-4 slide1 active">
                            {caption}
                        </div>
                        <div className="carousel-item align-items-center flex-column p-4 slide2">
                            {caption}
                        </div>
                        <div className="carousel-item align-items-center flex-column p-4 slide3">
                            {caption}
                        </div>
                        <div className="carousel-item align-items-center flex-column p-4 slide4">
                            {caption}
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}