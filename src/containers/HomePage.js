import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import JobList from '../components/JobList/JobList';

const HomePage = (props) => {

  useEffect(() => {
    props.onGetJobList();
  }, []);

  return (
    <JobList />
  )
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetJobList: () => dispatch(actions.getJobList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);