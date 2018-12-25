import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {  fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component{

    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    render(){
        return this.props.posts.map(post => {
        return (
        <div key={post.id}>   
            <div >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
        </div>
             );
         });
    }
}

const mapStatetoProps= (state) => {
    return { posts: state.posts};
}

export default connect(mapStatetoProps,
     { fetchPostsAndUsers }
     )(PostList);



