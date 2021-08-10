import React from 'react';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import '../css/Body.css';
import { useDataLayerValue } from '../context/DataLayer';
import Header from '../components/Header';
import SongRow from '../components/SongRow';

const Body = (spotify) => {

    const [{ discovery_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                {/* use this as the image src later when the illegal scope is resolves */}
                {discovery_weekly?.images[0].url}
                <img src="https://avatars.githubusercontent.com/u/7090849?v=4" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discovery_weekly?.description}description...</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {/* List of songs */}
                {discovery_weekly?.tracks.items.map((item) => {
                    <SongRow track={item.track} />

                })}
                {/* remove thiis when Illegal scope is resolved */}
                <SongRow track={item.track} />
            </div>
        </div>
    );
}

export default Body;


