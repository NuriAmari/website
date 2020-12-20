import React from 'react';
import Terminal from './components/terminal/Terminal';
import Frame from './components/general/Frame';
import commands from './components/terminal/commands';

const App = () => (
    <React.Fragment>
        <Frame />
        <Terminal {...commands} />
    </React.Fragment>
);

export default App;
