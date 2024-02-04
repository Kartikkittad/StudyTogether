import React, { useState, useEffect } from 'react';

const SpotifyPlayer = () => {

    return (
        <div className="spotify-player">
            <iframe
                style={{
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    top: '0',
                    height: '350px',
                    zIndex: '5',
                    maxWidth: '400px'
                }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>

            <div className="volInfo"
                style={{
                    color: 'white',
                    position: 'fixed',
                    zIndex: '6',
                    right: '0',
                    paddingRight: '65px',
                    // bottom: '76%',
                    top: '0',
                    fontSize: '10px'
                }}>
                *Use any volumer booster to control volume
            </div>
        </div >
    );
};

export default SpotifyPlayer;
