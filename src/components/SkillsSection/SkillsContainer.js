import React from 'react';
import '../../sass/skills.scss';
import { skills, Skill } from './index';

export const SkillsContainer = () => {
    return (
        <div className='skills container'>
            <h2 className='skills-header' id='skills'>
                skills
            </h2>

            {skills.map(skillGroup => (
                <React.Fragment key = {skillGroup.title}>
                    <h3>{skillGroup.title}</h3>
                    <div className='skill-group-container'>
                        {skillGroup.skills.map(skill => (
                            <Skill key={skill} data={skill} />
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};
