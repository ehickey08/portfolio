import React from 'react';
import '../../sass/skills.scss';
import { skills, Skill } from './index';

export const SkillsContainer = () => {
    return (
        <>
            <h2 className='skills-header' id='skills'>
                skills
            </h2>
            <div className='skills container'>
                {skills.map(skillGroup => (
                    <div key={skillGroup.title} className = "skill-group-container">
                        <h3>{skillGroup.title}</h3>
                        <div className='skill-container'>
                            {skillGroup.skills.map(skill => (
                                <Skill key={skill} data={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
