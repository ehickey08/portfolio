import React from 'react';
import '../../sass/project.scss';
import { projects } from '../../projects/projectInfo';
import { Project } from './Project';

export const ProjectContainer = () => {
    return (
        <div className='projects container section' id='projects'>
            {projects.map(project => (
                <Project key={project.title} data={project} />
            ))}
        </div>
    );
};
