import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = { form: {
        firstName: 'Escribe aqui tu nombre',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });  
        
    };
    //Este codigo es para hacer algo con el evento de escribir en el form

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            formValues={this.state.form}
                            avatarUrl={'https://s.gravatar.com/avatar/1dd8e34b28b3a7ce380e780940e97be3'}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
                </ React.Fragment>  
        )
    }
}

export default BadgeNew;