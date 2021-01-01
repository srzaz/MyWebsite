import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component {
    render() {

        const { title, image, description, link } = this.props.project;



        return (
            <div class="project-card" style={{ width: 250, height: 200 }}>
                <a href={link} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <div>

                        <h3>{title}</h3>
                        <img src={image} alt='profile' style={{ width: 200, height: 150 }} />
                        <p>{description}</p>

                    </div>
                </a>
            </div>
        )
    }
}



class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;