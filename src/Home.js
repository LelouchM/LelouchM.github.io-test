import React from 'react';
import createHistory from 'history/createHashHistory';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

const Home = ({ pushing }) => (
  <div>
    <h1>Home</h1>
    <button onClick={() => pushing()} >App</button>
  </div>
);

export default connect(
    (state, ownProps) => ({
        tasks: state.tasks
    }),
    dispatch => ({
		pushing: () => {
			dispatch(push('/'));
		},
    })
)(Home);
