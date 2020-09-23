import React, {Fragment, Suspense} from 'react';
import {Card} from 'react-bootstrap';

class Git extends React.Component {

	constructor() {
	    super()
	    this.state = { 
	    	allProjects: [],
	    	projectData: []
	    }
	}

	componentDidMount() {
    	let javaScriptProjectList = [];
		const repoUrl = 'https://api.github.com/user/repos';
		const header = {headers:{'Authorization':'token 800d7baa966127a9aba14ad9aef297c37ac41dc2'}}
		fetch(repoUrl, header).then(response => response.json()).then(data => {
			let projectList = [];
			let localProjectData = data.map((i) => {
				if(i.language == this.props.projectType){
					return (
					<Card className="bg-dark text-white" style={{ width: '18rem' }}>
					  <Card.Body>
					    <Card.Title>{i.name}</Card.Title>
					    <Card.Text>
					      Sample content
					    </Card.Text>
					    <Card.Link href="#">{i.html_url}</Card.Link>
					  </Card.Body>
					</Card>)
				}
				return;
			})
			this.setState({allProjects: data, projectData: localProjectData});
		})
  	}

  	componentDidUpdate(prevProps){
  		if(this.props.projectType !== prevProps.projectType){
  			let localProjectData = this.state.allProjects.map((i) => {
			if(i.language == this.props.projectType){
				return (<Card className="bg-dark text-white" style={{ width: '18rem'}}>
				  <Card.Body>
				    <Card.Title>{i.name}</Card.Title>
				    <Card.Text>
				      Sample content
				    </Card.Text>
				    <Card.Link href="#">{i.html_url}</Card.Link>
				  </Card.Body>
				</Card>)
			}
			return;
			})
			
			this.setState({projectData: localProjectData})
  		}
  	}

  	render() {
	    return (
	      <div>
	        <h1>Project List</h1>
	        <div>{this.state.projectData}</div>
	      </div>
	    )
	  }
}

export default Git;