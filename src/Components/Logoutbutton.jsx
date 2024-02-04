import React from 'react';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"

function Logoutbutton() {
    return (
        <SignedOut>
            <SignInButton />
        </SignedOut>
    );
}

export default Logoutbutton;