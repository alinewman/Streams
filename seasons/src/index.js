import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {


state = {  lat: null,    errorMessage: ''}

    componentDidMount(){
       console.log("did mount"); 
       window.navigator.geolocation.getCurrentPosition(
        position =>{
            this.setState({lat: position.coords.latitude})
        },
        err => {
            console.log( err.message);
            this.setState({errorMessage: err.message})
        }
    );
    }

    
    componentWillUpdate(){
        console.log("will update"); 
        
     }

     componentWillUnmount(){
        console.log("will unmount"); 
     }

     renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error:{this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>    
            }
        return <Spinner message="Please select to show location" />
     }

    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
