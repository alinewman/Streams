import React, { Component } from 'react';
import Modal from './components/Modal';

const styles = {
  container :{
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(to top right, purple, pink)',
    color: 'white',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}


export default class App extends Component {
  state = {showModal: false}
  state ={hover: false, down: false}
  mouseOut = () =>{
    this.setState({
   hover:false
    })
  }
  mouseUp = () =>{
        this.setState({
      down: false
    })
  }
  mouseDown = () =>{
    this.setState({
      down: true
    })
  }
  mouseOver = () =>{
    this.setState({
      hover:true
    })
  }
  render() {
    return (
    
       <div style={styles.container}>
         <button 
         
             onMouseOver={this.mouseOver}
             onMouseOut={this.mouseOut} 
             onMouseUp={this.mouseUp} 
             onMouseDown={this.mouseDown}
             style={{
               ...clickableStyles,
               color: this.state.down ? 'black' : 'black', 
             opacity: this.state.hover ? 0.5 : 1,
         
           }}
           onClick={() => this.setState({ showModal: true })}>
         {console.log(this.state)}
            <Title>Sign Up</Title>
        </button>
      {this.state.showModal &&(
         <Modal onClose={() => this.setState({ showModal: false })}>This is Modal</Modal>
      ) }
      </div>


    );
  }
}
const titleStyles = {fontSize: 90, textTransform:'uppercase', letterSpacing: 6}
const Title = ({children})  => <div style={titleStyles}>{children}</div>

const clickableStyles={cursor: 'pointer', userSelect: 'none'}
class Button extends Component{
  state ={hover: false, down: false}
  mouseOut = () =>{
    this.setState({
   hover:false
    })
  }
  mouseUp = () =>{
        this.setState({
      down: false
    })
  }
  mouseDown = () =>{
    this.setState({
      down: true
    })
  }
  mouseOver = () =>{
    this.setState({
      hover:true
    })
  }
  render(){
    return <div 
    onMouseOver={this.mouseOver}
    onMouseOut={this.mouseOut} 
    onMouseUp={this.mouseUp} 
    onMouseDown={this.mouseDown}
    style={{
      ...clickableStyles,
      color: this.state.down ? 'black' : 'pink', 
    opacity: this.state.hover ? 0.5 : 1,

  }}
    >
    {this.props.children}
    </div>
  }
}

