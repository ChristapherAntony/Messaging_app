import React from 'react'

import { useState, useEffect } from 'react';

import ChatFeed from '../Components/ChatFeed';
import ChatProfile from '../Components/ChatProfile';
import { Outlet } from 'react-router-dom'
function Dash() {
    return (
        <div className="md:pl-16 pt-16">
            <div className="-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6">

                {/* side bar items */}
                <Outlet />

                <ChatFeed />
                <ChatProfile />
            </div>
        </div>
    )
}

export default Dash