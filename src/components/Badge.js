import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo"/>
            </div>

            <div className="Badge__section-name">
                <Gravatar 
                    className="Badge__avatar"
                    email={this.props.formValues.email}
                    />
                <h1>{this.props.formValues.firstName || 'FIRST_NAME'}
                <br/> {this.props.formValues.lastName || 'LAST_NAME'}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.formValues.jobTitle || 'JOB_TITLE'}</h3>
                <div>{this.props.formValues.twitter || 'TWITTER'}</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>;
    }
}

export default Badge; 