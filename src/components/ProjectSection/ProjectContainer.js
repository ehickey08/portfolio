import React from 'react';
import '../../sass/project.scss';
import { projects } from './projectInfo';
import { Project } from './Project';

export const ProjectContainer = () => {
    return (
        <>
            <h2 className="project-header" id='projects'>projects</h2>
            <div className='projects container section' >
                {projects.map(project => (
                    <Project key={project.title} data={project} />
                ))}
            </div>
        </>
    );
};
