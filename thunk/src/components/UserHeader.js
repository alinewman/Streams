import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';




class UserHeader extends Component {

 render (){
   const { user } = this.props; 
         if (!user){
            return null;
        }

        return <div>{user.name}</div>; 
    }
}

const mapStateToProps =(state, ownProps)  => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);