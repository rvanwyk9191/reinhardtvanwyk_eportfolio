import React from 'react';
import { Document } from 'react-pdf'
import '../App.css';


function Resume() {
    return (
        <div>
            <Document file='./reinhardt_resume.pdf'/>
        </div>
    );
}

export default Resume;