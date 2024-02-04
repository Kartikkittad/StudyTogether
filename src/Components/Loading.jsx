import React from 'react';

const Loading = () => (
    <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff" // Change the fill color as needed
    >
        <circle cx="25" cy="25" r="20" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
            <animate
                attributeName="stroke-dasharray"
                values="1, 200; 90, 150; 1, 200"
                keyTimes="0; 0.5; 1"
                dur="3s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke-dashoffset"
                values="0 -98; -45 -143; 0 -98"
                keyTimes="0; 0.5; 1"
                dur="3s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

export default Loading;
