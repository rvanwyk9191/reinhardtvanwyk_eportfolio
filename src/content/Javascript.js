import React from 'react';
import '../App.css';
import Git from '../data/Git.js';

function Javascript() {
	const languageType = 'JavaScript';
    return (
        <div>
            <Git projectType={languageType}/>
        </div>
    );
}

export default Javascript;