// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Room from './Pages/Room';
import SoloRoom from './Pages/SoloRoom';
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import { SignOutButton, SignInButton, SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import { Alert } from '@mui/material';

function App() {
  const { signedIn } = useClerk();

  return (
    <div className='body'>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/room"
              element={
                <React.Fragment>
                  <SignedIn>
                    <Room />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </React.Fragment>
              }
            />
            <Route
              path="/solo"
              element={
                <React.Fragment>
                  <SignedIn>
                    <SoloRoom />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </React.Fragment>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
