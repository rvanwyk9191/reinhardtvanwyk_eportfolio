import React from 'react';
import '../App.css';
import Git from '../data/Git.js';

function Java() {
	const languageType = 'Java';
    return (
        <div>
            <Git projectType={languageType}/>
        </div>
    );
}

export default Java;