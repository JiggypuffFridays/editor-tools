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
                    <div onClick={handleButtonClick("/")} style={{marginTop:'-15px',marginBottom:'-15px'}}><h3>👑 Editor Empire </h3></div> 
                    <span onClick={handleButtonClick("/editor-tools/auto-twitch-chat/")}><u>AutoTwitchChat</u></span>
                </div>
            </center>
        </div>
    );
}

export default Header;