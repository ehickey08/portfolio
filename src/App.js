import React, { useState, useEffect } from 'react';
import {
    Navigation,
    IntroContainer,
    ProjectContainer,
    SkillsContainer,
    ModalContainer,
} from './components';

function App() {
    const [modalOpen, setModalOpen] = useState(false);
   
    return (
        <div className='App'>
            <Navigation setModalOpen={setModalOpen} />
            <IntroContainer setModalOpen={setModalOpen} />
            <ProjectContainer />
            <SkillsContainer />
            {modalOpen && <ModalContainer setModalOpen={setModalOpen} />}
        </div>
    );
}

export default App;
