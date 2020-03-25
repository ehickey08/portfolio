import React from 'react';
import { Navigation, IntroContainer, ProjectContainer, SkillsContainer } from './components';

function App() {
    return (
        <div className='App'>
            <Navigation />
            <IntroContainer />
            <SkillsContainer />
            <ProjectContainer />
        </div>
    );
}

export default App;
