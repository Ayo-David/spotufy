import React from 'react';
import '../css/Player.css'
import Body from '../components/Body';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

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
