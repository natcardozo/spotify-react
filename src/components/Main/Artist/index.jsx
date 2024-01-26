import React from 'react'

import "./Artist.css";

export default function Artist() {
    return (
        <div id="result-artist" className="hidden">
            <div className="grid-container">
                <div className="artist-card" id="">
                    <div className="card-img">
                        <img id="artist-img" className="artist-img" />
                        <div className="play">
                            <span className="fa fa-solid fa-play"></span>
                        </div>
                    </div>
                    <div className="card-text">
                        <a title="Foo Fighters" className="vst" href="">
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
