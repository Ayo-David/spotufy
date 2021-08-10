import React from 'react';
import Search from '@material-ui/icons/Search';
import '../css/Header.css'
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

const Header = (props) => {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input placeholder="Search for Artists, Songs, or Podcast" type="text" />

            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />

                <h4>{user?.display_name}Ayo David</h4>
            </div>
        </div>
    );
}

export default Header;
