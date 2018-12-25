import React, { Component } from 'react';
import axios from 'axios';
import SecondTime from './SecondTime';
import App from './App';


class Time extends Component {

    state = {
        time: [],
        show: false,
        hide: true
    }
    
    clickMe  = () => {
        this.setState({ show: true });

    }

    callApi(){
        axios.get('http://worldclockapi.com/api/json/est/now/?id').then(
            (response) => {
                    console.log(response.data);
                    const currentTime = response.data.currentDateTime
                    this.setState({ time: currentTime })

            }
        )   
    }

    componentDidMount(){

        this.callApi();
    }

    componentWillUpdate(nextProps, nextState){
        if (nextState.open === true && this.state.open === false) {
            this.props.onWillOpen();
          }
    }


render(){
    console.log(this.state)
    return (
        <div>
        <div> { this.state.show ? this.state.time: null }</div>
        <button onClick={this.clickMe}>Click Me</button>
        <SecondTime triggerParentUpdate={this.clickMe}/>
        </div>
    )
    }
}
export default Time;