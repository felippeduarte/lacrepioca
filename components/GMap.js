import React, { Component } from 'react';

export default class GMap extends Component {
    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    width="800"
                    height="650"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYULQo_KerAZvRyGDMPVNZsyors5H4Bwo
                        &q=R.+Dr.+Odilon+Galoti,+371+-+Capoeiras,+Florianópolis+-+SC,+88070-480&zoom=14">
                </iframe>
            </div>
        )
    }
}