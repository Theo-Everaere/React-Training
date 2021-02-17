import React, { Component } from 'react'

class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {isChecked : true}
    }
    handleClick = ()=> {
        console.log('Test')
        this.setState({isChecked : !this.state.isChecked})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Cocher / Décocher</button>
                <input type="checkbox" onChange={this.handleClick} checked={this.state.isChecked}/>
            </div>
        )
    }
}

export default Checkbox;