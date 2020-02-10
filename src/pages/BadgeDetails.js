import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
    const [ count, setCount ] = React.useState(0);

    if(count > max) {
        setCount(0);
    }

    return [count, setCount];
}
//Esto es un hook personalizado porque YOLO

function BadgeDetails (props) {
    const [ count, setCount ] = useIncreaseCount(4);
    //HOOKS: esto es como state / setstate excepto que el nombre lo damos. El argumento opcional que le damos a useState es el valor inicial de la variable 

    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge formValues={badge}/>
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count + 1);
                                }} className="btn btn-primary mr-4">
                                    Increase Count {count}
                                </button>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div> 
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;