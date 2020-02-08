import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

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
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000)
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
        clearInterval(this.intervalId);
    }

    render() {
        if(this.state.loading && !this.state.data) {
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
                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
                </div>              
                </ React.Fragment>
        );
    }
}

export default Badges;