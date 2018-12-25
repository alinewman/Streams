import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
       return (
         <div className ="ui container comments">
         <ApprovalCard >
            <CommentDetail author="Sam" timeAgo="Today at 4:00pm" content="Hey"/>
         </ApprovalCard>  
         <ApprovalCard>
            <CommentDetail author="Ali"  timeAgo="Today at 7:00pm" content="Howdy"/>
          </ApprovalCard>
          <ApprovalCard>  
            <CommentDetail author="Ahkim"  timeAgo="Today at 1:00pm" content="Hi"/>
         </ApprovalCard>
            </div>
       );
    }

    ReactDOM.render(<App />, document.getElementById('root'));