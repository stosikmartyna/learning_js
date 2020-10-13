import React, { useState } from 'react';
import './DarkLightToggle.css';

export const DarkLightToggle = () => {
    const [mode, setMode] = useState('lightMode');
    
    const changeMode = () => {
        mode === 'lightMode' ? setMode('darkMode') : setMode('lightMode')
    }

    return (
        <div className={`container ${mode}`}>
            <h1>Dark & Light Toggle</h1>
            <label>
                <input type='checkbox' id='toggle' onClick={changeMode}/>
                Toggle
            </label>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione cum quas quibusdam sapiente alias enim, accusamus rerum fugiat placeat officiis vero facilis porro voluptas esse vel ea repellendus doloremque!</p>
        </div>
    )
}