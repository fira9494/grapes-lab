import React from 'react';
import Card from 'react-bootstrap/Card';
import Vote from '../Vote/Vote';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router';

function ProjectCard({project}) {

	const history = useHistory();

	return (
		<div>

			<Card>
				<Card.Body>
					<Card.Title>{ project.projectName }</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{ project.author }</Card.Subtitle>
					<Card.Text>
						{ project.concept }
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">{ project.status }</small>
					<small className="text-muted">{ project.rating }</small>
					<small className="text-muted">
						<Vote/>
					</small>
					<Button onClick={ () => {
						history.push('/project');
					} }>Show more...</Button>
				</Card.Footer>
			</Card>

		</div>
	);
}

export default ProjectCard;
