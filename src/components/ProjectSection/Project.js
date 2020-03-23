import React from 'react';

export const Project = ({ data }) => {
    return (
        <Wrapper liveSite={data.liveSite}>
            <div className='title-container'>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            {data.image && (
                <div className='image-container'>
                    <img
                        className='project-image'
                        src={data.image}
                        alt={`${data.title} screenshot`}
                    />
                </div>
            )}
            <ProjectInfo data={data} />
        </Wrapper>
    );
};

const ProjectInfo = ({ data }) => {
    return (
        <div className='info-container'>
            <ul className='roles'>
                {data.roles.map(role => (
                    <li className='task' key={role}>
                        {role}
                    </li>
                ))}
            </ul>

            <div className='stack-container'>
                {data.stack.map(tag => (
                    <div className='tag' key={tag}>
                        {tag}
                    </div>
                ))}
            </div>

            <span>
                <a href={data.repo} target='_blank' rel='noopener noreferrer'>
                    GitHub
                </a>
            </span>
        </div>
    );
};
const Wrapper = ({ liveSite, children }) => {
    return (
        <>
            {liveSite ? (
                <a
                    href={liveSite}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project clickable'>
                    {children}
                </a>
            ) : (
                <div className='project'>{children}</div>
            )}
        </>
    );
};
