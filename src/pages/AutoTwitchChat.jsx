import React from 'react';
import { useState } from 'react';

import AdUnit from './AdUnit';

import { toPng } from 'html-to-image'

import '../index.css'
import './AutoTwitchChat.css';

function AutoTwitchChat() {

    const [username, setUsername] = useState("username");
    const [usernameColor, setUsernameColor] = useState("#7DF9FF"); 
    const [message, setMessage] = useState("any message here!");
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

            <center>
                <h1>Auto Twitch Chat Mini</h1>
                <h4 style={{opacity:'60%',marginTop:'-30px'}}>Twitch Chat Message Generator</h4>
            </center>

            <div id="sideBySide" style={{display:'grid',gridTemplateColumns:'1fr 1fr', width:'45%',margin:'0 auto'}}>
                <div style={{ display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                    <b style={{paddingBottom:'5px'}}>Username</b>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{textAlign:"center"}}/>
                    <br/>

                    <b style={{paddingBottom:'5px'}}>Username Color</b>
                    <input style={{width:'32px',height:'32px'}} type="color" value={usernameColor} onChange={e => setUsernameColor(e.target.value)} />
                    <br/>

                    <b style={{paddingBottom:'5px'}}>Message</b>
                    <textarea style={{resize:'none'}} rows="3" value={message} onChange={e => setMessage(e.target.value)} maxLength={500}></textarea>
                    <br/>
                    
                    <b style={{paddingBottom:'5px'}}>Font</b>
                    <select value={font} onChange={e => setFont(e.target.value)} style={{ fontFamily: font === "Roboto" ? "Roboto" : "inherit" }}>
                        <option value="Roboto" style={{ fontFamily: "Roboto" }} selected>Roboto</option>
                        <option value="Default" style={{ fontFamily: "inherit" }}>Default</option>
                    </select>
                    <br/>

                    <label>
                        <input type="checkbox" checked={dropShadow} onChange={() => setDropShadow(!dropShadow)} />
                        <b style={{paddingBottom:'5px'}}> &nbsp; Add Drop Shadow</b>
                    </label>
                </div>


                <div style={{ display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                    <div id="chatbox-preview" style={{ padding: '10', width: 'fit-content', fontFamily: font === "Roboto" ? "Roboto" : "inherit", userSelect: 'none'  }}>

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
            </div>

            <br/>
            
            <div style={{width:'fit-content',margin:'0 auto'}}>
                <button style={{padding:'5px',fontSize:'20px'}} onClick={downloadImage}>Download Image</button>
            </div>

            <div style={{width:'fit-content',height:'fit-content',border:'black 3px solid',borderRadius:'6px'}}>
            <AdUnit />
            </div>

           
            
        </div>
    )
}

export default AutoTwitchChat;