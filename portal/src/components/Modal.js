import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const style = {
      background:{
        position: 'absolute',
        top: 0,
        left: 0,
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      container:{
        backgroundColor: 'white',
        borderRadius:10,
        boxShadow: '0 0 10px  #00000088',
        width: 650,
        height: 350,
        color:'black',
        padding: 40,
        userSelect: 'none'
      }
}
export default class Modal extends Component {
    constructor(props){
        super(props)
        this.element = document.createElement('div');
        this.modalRoot = document.getElementById('modal-root')
        this.modalRoot.appendChild(this.element)
    }
    componentDidMount(){
        document.addEventListener("keyup", this.keyup, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keyup", this.keyup, false);
        this.modalRoot.removeChild(this.element)
      }
      keyup = (e) => {
        if(e.key === 'Escape') {
          this.props.onClose()
        }
      }
    hideModal = (props) => {
        this.props.onClose()
      };
l
    render(){
        return (
        ReactDOM.createPortal(this._renderModal(), this.element )
        )
    }
    _renderModal(){
        return (
            <div style={style.background} onClick={this.hideModal}>
            <div style={style.container} onClick={e => e.stopPropagation()}>{this.props.children}</div>
            </div>
        )
    }
}

