import React from 'react';
import '../App.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function Bio() {
	return (
		<Timeline lineColor={'#ddd'}>
			<TimelineItem
				key="001"
				dateText="06/04/1991"
				dateInnerStyle={{ background: '#76bb7f' }}>
				<p style={{ color: '#ddd'}}>
					Born in Evander, South Africa
				</p>
			</TimelineItem>
			<TimelineItem
				key="002"
				dateText="02/1999"
				dateInnerStyle={{ background: '#76bb7f' }}
				bodyContainerStyle={{
					background: '#ddd',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
				}}>
				<p>
					Move to USA
				</p>
			</TimelineItem>
			<TimelineItem
				key="003"
				dateText="05/2013"
				dateInnerStyle={{ background: '#76bb7f' }}>
				<p style={{ color: '#ddd'}}>
					Graduated from Lewis University with a degree in Computer Information Systems
				</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="07/2013"
				dateInnerStyle={{ background: '#76bb7f' }}
				bodyContainerStyle={{
					background: '#ddd',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
				}}>
				<p>
					Started work for JPMorgan Chase in Enterprise Systems learning how to develop enterprise scale applications.
				</p>
			</TimelineItem>
			<TimelineItem
				key="005"
				dateText="02/2017"
				dateInnerStyle={{ background: '#76bb7f' }}>
				<p style={{ color: '#ddd'}}>
					Started working for Commercial Banking in the Specialty Loans business developing full-stack applications.
				</p>
			</TimelineItem>
			<TimelineItem
				key="006"
				dateText="03/2018"
				dateInnerStyle={{ background: '#76bb7f' }}
				bodyContainerStyle={{
					background: '#ddd',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
				}}>
				<p>
					Moved back to Enterprise Systems as an Associate helping to lead and guide scrum teams.
				</p>
			</TimelineItem>
			<TimelineItem
				key="007"
				dateText="04/2019"
				dateInnerStyle={{ background: '#76bb7f' }}>
				<p style={{ color: '#ddd'}}>
					Moved to Miami and started working for NextEra Energy Resources in the Security group, helping to automate security processes.
				</p>
			</TimelineItem>
			<TimelineItem
				key="008"
				dateText="09/2019"
				dateInnerStyle={{ background: '#76bb7f' }}
				bodyContainerStyle={{
					background: '#ddd',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
				}}>
				<p>
					Moved back to Chicago and began working for Fiserv, helping to develop APIs for the Card Services group.
				</p>
			</TimelineItem>
			<TimelineItem
				key="009"
				dateText="Present"
				dateInnerStyle={{ background: '#76bb7f' }}>
				<p style={{ color: '#ddd'}}>
					Learning to develop in JavaScript and focusing on React as a specialty area. My hopes are to one day be able to use JavaScript in my every day coding job.
				</p>
			</TimelineItem>
		</Timeline>

	);
}

export default Bio;