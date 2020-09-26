import React from 'react';
import '../App.css';
import MyTimeline from '../content/index/Timeline';
import ContactCard from '../content/index/ContactCard';


function Bio() {

	return (
		<div>
			<ContactCard/>
			<MyTimeline />
		</div>
	);
}

export default Bio;