import React from 'react';
import '../css/Footer.css';
import { PlayCircleOutline, PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { SkipPrevious } from '@material-ui/icons';
import { SkipNext } from '@material-ui/icons';
import { Shuffle } from '@material-ui/icons';
import { Repeat } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://i1.wp.com/praisejamzblog.com/wp-content/uploads/2020/01/Nath.jpg?resize=1024%2C1024&ssl=1" alt="" className="footer__albumLogo" />
                <div className="footer__songInfo">
                    <h4>Glory be to God</h4>
                    <p>Bassey</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipNext className="footer__icon" />
                <PlayCircleOutline className="footer__icon" fontSize="large" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />

            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default Footer;
