// SoloRoom.jsx

import React, { useState } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PomodoroTimer from '../Components/PomodroTimer';
import './Styles/SoloRoom.css'
import SpotifyPlayer from '../Components/MusicPlayer';
import ToDoList from '../Components/ToDoList';
import NoteList from '../Components/NoteList';
import { useNavigate } from 'react-router-dom';


function SoloRoom() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isPomodoroTimerOpen, setPomodoroTimerOpen] = useState(false);
    const [isSpotifyPlayerOpen, setSpotifyPlayerOpen] = useState(false);
    const [isTodoOpen, setTodoOpen] = useState(false);
    const [isNoteOpen, setNoteOpen] = useState(false);
    const [input, setInput] = useState("");
    const [todos, settodos] = useState([]);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/')
    }


    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const togglePomodoroTimer = () => {
        setPomodoroTimerOpen(!isPomodoroTimerOpen);
    };

    const toggleSpotifyPlayer = () => {
        setSpotifyPlayerOpen(!isSpotifyPlayerOpen);
    };

    const toggleTodo = () => {
        setTodoOpen(!isTodoOpen);
    };

    const toggleNote = () => {
        setNoteOpen(!isNoteOpen);
    };

    return (
        <>
            <div className="bg1"></div>
            <div className="sidebar open">
                <div className="icons">
                    <div onClick={handleNavigation} className='icon' ><HomeIcon /></div>
                    <div className="icon" onClick={toggleSpotifyPlayer}><MusicNoteIcon /></div>
                    <div className="icon" onClick={togglePomodoroTimer}><AccessAlarmIcon /></div>
                    <div className="icon" onClick={toggleTodo}><AddTaskIcon /></div>
                    <div className="icon" onClick={toggleNote}><CreateIcon /></div>
                    <div className='icon' ><IosShareRoundedIcon /></div>
                </div>
                <div className='BIcon'>
                </div>
                <div className='timer-container'>
                    {isPomodoroTimerOpen && <PomodoroTimer isOpen={isPomodoroTimerOpen} onClose={togglePomodoroTimer} />}
                </div>
                <div className='music-player-container'>
                    {isSpotifyPlayerOpen && (
                        <>
                            <SpotifyPlayer />
                        </>
                    )}
                </div>
                {isTodoOpen && (
                    <ToDoList
                        input={input}
                        todos={todos}
                        setInput={setInput}
                        settodos={settodos}
                    />
                )}
                {isNoteOpen && (
                    <NoteList />
                )}
            </div>

        </>
    );
}

export default SoloRoom;
