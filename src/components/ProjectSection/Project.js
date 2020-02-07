import React from 'react';

export const Project = ({ data }) => {
    return (
        <div className='project'>
            {data.image && <img src={data.image} alt={`${data.title} photo`} />}
            <ProjectInfo data={data} />
        </div>
    );
};

const ProjectInfo = ({ data }) => {
    return (
        <div className="info-container">
            <Title liveSite={data.liveSite} title={data.title} />
            <p>{data.description}</p>
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
const Title = ({ liveSite, title }) => {
    return (
        <>
            {liveSite ? (
                <h3>
                    <a
                        href={liveSite}
                        target='_blank'
                        rel='noopener noreferrer'>
                        {title}
                    </a>
                </h3>
            ) : (
                <h3>{title}</h3>
            )}
        </>
    );
};
