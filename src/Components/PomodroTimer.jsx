import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import './Styles/Pomodro.css'

const PomodoroTimer = ({ isOpen, onClose }) => {
    const [breakType, setBreakType] = useState('pomodoro'); // Default to Pomodoro
    const [breakDurations, setBreakDurations] = useState({
        pomodoro: 30 * 60, // 25 minutes in seconds
        shortBreak: 5 * 60, // 10 minutes in seconds
        longBreak: 10 * 60, // 20 minutes in seconds
    });

    const [seconds, setSeconds] = useState(breakDurations[breakType]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            handleBreakTypeChange();
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(breakDurations[breakType]);
    };

    const handleSetBreakType = (type) => {
        setBreakType(type);
        setSeconds(breakDurations[type]);
        setIsActive(false);
    };

    const handleBreakTypeChange = () => {
        if (breakType === 'pomodoro') {
            handleSetBreakType('shortBreak');
        } else if (breakType === 'shortBreak') {
            handleSetBreakType('pomodoro');
        } else {
            handleSetBreakType('pomodoro');
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="pomodoro-timer">
            <div className="timer-display">
                <span>{Math.floor(seconds / 60).toString().padStart(2, '0')}:</span>
                <span>{(seconds % 60).toString().padStart(2, '0')}</span>
            </div>
            <div className="timer-controls">
                <button onClick={handleToggle}>
                    {isActive ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={handleReset}><FaStop /></button>
            </div>
            <div className="timer-options">
                <button onClick={() => handleSetBreakType('pomodoro')}>Study</button>
                <button onClick={() => handleSetBreakType('shortBreak')}>Short Break</button>
                <button onClick={() => handleSetBreakType('longBreak')}>Long Break</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PomodoroTimer;
