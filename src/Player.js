import React from 'react';
import './Player.css'
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Player
