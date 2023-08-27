import React from 'react';
import { useState } from 'react';

import { toPng } from 'html-to-image'

import '../index.css'
import './AutoTwitchChat.css';

function AutoTwitchChat() {

    const [username, setUsername] = useState("username");
    const [usernameColor, setUsernameColor] = useState("#7DF9FF"); 
    const [message, setMessage] = useState("any message here!");
    const [rectanglePadding, setRectanglePadding] = useState(10);
    const [font, setFont] = useState("Default");
    const [dropShadow, setDropShadow] = useState(false);

    const downloadImage = () => {
        const node = document.getElementById('chatbox-preview');

        toPng(node, {
            pixelRatio: 4
        })
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'chatbox.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(err => {
            console.error('Error generating image:', err);
        });
    }


    return(
        <div className="AutoTwitchChat">

        
            <h1>Auto Twitch Chat Mini</h1>
            <h4 style={{opacity:'60%',marginTop:'-30px'}}>Twitch Chat Message Generator</h4>
            
            <div>
                Username
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                
                Username Color 
                <input type="color" value={usernameColor} onChange={e => setUsernameColor(e.target.value)} />
                
                Message
                <textarea value={message} onChange={e => setMessage(e.target.value)} maxLength={500}></textarea>
                
                Font
                <select value={font} onChange={e => setFont(e.target.value)} style={{ fontFamily: font === "Roboto" ? "Roboto" : "inherit" }}>
                    <option value="Default" style={{ fontFamily: "inherit" }}>Default</option>
                    <option value="Roboto" style={{ fontFamily: "Roboto" }}>Roboto</option>
                </select>

                <label>
                    <input type="checkbox" checked={dropShadow} onChange={() => setDropShadow(!dropShadow)} />
                    Add Drop Shadow
                </label>
            </div>


            <div>
                <div pid="chatbox-preview" style={{ pointerEvents:'none', padding: rectanglePadding, width: 'fit-content', fontFamily: font === "Roboto" ? "Roboto" : "inherit" }}>

                    <div style={{backgroundColor:'#2a2a2a',padding:'10px',borderRadius:'15px',boxShadow: dropShadow ? '4px 4px 0px rgba(0, 0, 0, .25)' : 'none'}}>
                        <span style={{ color: usernameColor }}>{username}:</span>&nbsp;
                        {message.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                <span style={{color: 'white'}}>{line}</span>
                                {index !== message.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                
                </div>
            </div>

            <button onClick={downloadImage}>Download Image</button>
            
        </div>
    )
}

export default AutoTwitchChat;