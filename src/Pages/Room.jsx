import React, { useState, useEffect, useRef } from 'react';
import Loading from '../Components/Loading';

const Room = ({ roomUrl }) => {
    const [loading, setLoading] = useState(true);
    const iframeRef = useRef();

    useEffect(() => {
        const initializeRoom = () => {
            try {
                const iframe = document.createElement('iframe');
                iframe.src = roomUrl || 'https://studyroom1.daily.co/StudyRoom';
                iframe.allow = 'camera; microphone; fullscreen';
                iframe.width = '100%';
                iframe.height = '100%';
                iframe.frameBorder = 0;
                iframe.style.border = 'none';

                iframe.onload = () => {
                    setLoading(false);
                };

                iframeRef.current.style.overflow = 'hidden';
                iframeRef.current.appendChild(iframe);
            } catch (error) {
                console.error('Error initializing room:', error);
                setLoading(false);
            }
        };

        initializeRoom();
    }, [roomUrl]);

    return (
        <div className='room' ref={iframeRef} style={{ width: '100%', height: '100vh', backgroundColor: '#0E0F1E', overflow: 'hidden', position: 'relative' }}>
            {loading && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Room;
