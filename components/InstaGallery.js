import React, { Component } from 'react';
import Instafeed from 'react-instafeed'

export default class InstaGallery extends Component {
    render() {
        const instafeedTemplate =
            '<div class="col-xs-12 col-sm-6 col-md-4 instagallery-row">'+
                '<a href="{{link}}" title="{{caption}}" target="_blank">'+
                    '<img src="{{image}}" alt="{{caption}}" class="img-fluid img-thumbnail" />'+
                '</a>'+
            '</div>';

        return (
            <div id={this.props.instafeedTarget}>
                <Instafeed
                    limit='6'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={this.props.instafeedTarget}
                    template={instafeedTemplate}
                    userId='6355267685'
                    clientId='9a772be227b846d981eeaf411746d627'
                    accessToken='6355267685.1677ed0.38a22cc13f0340c7aafe388aa8cb97ee'
                />
            </div>
        );
    }
}

/*
userId='2140669095' lacrepioca
                    userId={process.env.REACT_APP_INSTAGRAM_USER_ID}
                    clientId={process.env.REACT_APP_INSTAGRAM_CLIENT_ID}
                    accessToken={process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}
*/