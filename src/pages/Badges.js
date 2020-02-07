import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

class Badges extends React.Component {
    constructor(props) {
        super(props);
        console.log('1.Constructor()');

        this.state = {
            loading: true,
            error: null,
            data: [], 
         }
    }

    componentDidMount() {

    /*    this.timeoutId = setTimeout(() => {
            this.setState ({
                data: [
                 {
                     "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                     "firstName": "Major",
                     "lastName": "Rodriguez",
                     "email": "Ilene66@hotmail.com",
                     "jobTitle": "Human Research Architect",
                     "twitter": "MajorRodriguez61545",
                     "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                 },
                 {
                     "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                     "firstName": "Daphney",
                     "lastName": "Torphy",
                     "email": "Ron61@hotmail.com",
                     "jobTitle": "National Markets Officer",
                     "twitter": "DaphneyTorphy96105",
                     "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                 },
                 {
                     "id": "a9748581-dfdc-4a78-930d-5205a2ccef48",
                     "firstName": "Tatyana",
                     "lastName": "Von",
                     "email": "Herminio.Schmeler@hotmail.com",
                     "jobTitle": "Central Branding Representative",
                     "twitter": "TatyanaVon35871-3686",
                     "avatarUrl": "https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon"
                 }
             ] 
             })   
        }, 3000); */

        this.fetchData();
    } 

    fetchData = async () => {
        this.setState({ 
            loading: true,
            error: null 
        });  
        
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            })
        } catch(error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. Update()');
        console.log({
            prevProps: prevProps, 
            prevState: prevState
        });
        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount() {
        console.log('6. Unmount()');
        clearTimeout(this.timeoutId);
        //FUnción que permite que no marque un error cuando se desmonta un componente que no ha cambiado su estado. Así liberamos memoria.
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container"> 
                            <img 
                            className="Badges__conf-logo" 
                            src={confLogo} alt="Conf Logo"/>
                        </div>                        
                    </div>
                </div> 

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" 
                        className="btn btn-primary">
                            New Badge                            
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>              
                </ React.Fragment>
        );
    }
}

export default Badges;