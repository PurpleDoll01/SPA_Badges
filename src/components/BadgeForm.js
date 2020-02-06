import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e => {
        console.log({ 
            name: e.target.name,
            value: e.target.value })
    }
    //Este codigo es para hacer algo con el evento de escribir en el form
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e => {
        e.preventDefault();
        //previene que se haga submit y recargue la página
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1> 
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input onChange={this.handleChange}
                        className="form-control" type="text" 
                        name="firstName"/>
                    </div>  

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;