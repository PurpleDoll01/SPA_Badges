import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,  
        form: {
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({
            loading: true,
            error: null
        }) 

        try {
           await api.badges.create(this.state.form) 
           this.setState({
            loading: false
        }) 

            this.props.history.push('/badges');           
        }   catch (error) {
            this.setState({
                loading: false,
                error: error
            })            
        }
    }
   
    render() {
        if(this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            formValues={this.state.form}
                            avatarUrl={'https://s.gravatar.com/avatar/1dd8e34b28b3a7ce380e780940e97be3'}/>
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1> 
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit} 
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
                </ React.Fragment>  
        )
    }
}

export default BadgeNew;