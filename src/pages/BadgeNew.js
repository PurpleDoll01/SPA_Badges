import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Mariana" 
                            lastName="Valencia"
                            twitter ="@purpledoll00"
                            jobTitle="Frontend Developer"
                            avatarUrl="https://s.gravatar.com/avatar/1dd8e34b28b3a7ce380e780940e97be3"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default BadgeNew;