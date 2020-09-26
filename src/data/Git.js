import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';

class Git extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = { 
	    	allProjects: [],
	    	projectData: []
	    }
	}

	processCards() {
		let localProjectData = this.state.allProjects.map((i) => {
			if(i.language === this.props.projectType){
				return (
					<Col key={i.name}>
						<Card className="bg-dark text-white" style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{i.name}</Card.Title>
								<Card.Link href={i.html_url} target="_blank">Link</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				)
			}
			return "";
		})

		this.setState({projectData: localProjectData})
	}

	componentDidMount(){
		const token = process.env.REACT_APP_GIT;
		const repoUrl = 'https://api.github.com/user/repos';
		const header = {headers:{'Authorization':'token ' + token}}
		fetch(repoUrl, header).then(response => response.json()).then(data => {
			this.setState({allProjects:data});
			this.processCards()
		})
  	}

  	componentDidUpdate(prevProps){
		if(this.props.projectType !== prevProps.projectType) {
			this.processCards();
		}
  	}

  	render() {
	    return (
	      <div>
	        <h1>Project List</h1>
			<Container>
				<Row>
					{this.state.projectData}
				</Row>
			</Container>
	      </div>
	    )
	  }
}

export default Git;