import React from 'react';
import "../css/SongRow.css"

const SongRow = ({ track }) => {
    return (

        <div className="songRow">
            {/* <img src={track.album.image[0].url} alt="" /> */}
            <img src="https://2.bp.blogspot.com/-ygW6Xh2I1rQ/V8fycEa3G_I/AAAAAAAAMpA/wOiGLu8bBo4KBjMtbMQYqEi-fjsSnsAzACLcB/s320/Eben%2B-%2BGod%2BAll%2BBy%2BYourself.jpg" alt="" />
            <div className="songRow__ info">
                <h1>{track?.name}God All By Yourself</h1>
                <p>
                    {track?.artist?.map((artist) => artist.name).join(". ")}
                    {track?.album?.name}
                    Eben
                    You are God
                </p>
            </div>

        </div>
    );
}

export default SongRow;
