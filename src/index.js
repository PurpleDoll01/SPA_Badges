import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName="Mariana" 
    lastName="Valencia" 
    jobTitle="Frontend Developer" 
    twitter="@purpledoll00"
    avatarUrl="https://s.gravatar.com/avatar/1dd8e34b28b3a7ce380e780940e97be3?s=80"
    />, container);
