import React from 'react';

import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleButtonClick = (path) => () => {
        navigate(path);
    };

    return (
        <div>
            <center>
                <div style={{cursor:'pointer',backgroundColor:"black",color:'white',padding:'10px'}}>
                    <div onClick={handleButtonClick("/")}><h3>👑 Editor Empire </h3></div> 
                    <div onClick={handleButtonClick("/editor-tools/auto-twitch-chat/")}><u>AutoTwitchChat</u></div>
                </div>
            </center>
        </div>
    );
}

export default Header;