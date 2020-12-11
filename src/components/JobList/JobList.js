import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import classes from './JobList.css';
import Container from '../UI/Container/Container';
import NavigationBar from '../UI/NavigationBar/NavigationBar';
import JobItem from './JobItem/JobItem';

const JobList = (props) => {
  let authRedirect = null;
  if (!props.isAuth) {
    authRedirect = <Redirect to='/login' />
  }

  let showing = '-';
  let jobList = null;
  if (props.jobList) {
    jobList = props.jobList.map(jobItem => (
      <JobItem
        key={jobItem.id}
        id={jobItem.id}
        companyLogo={jobItem.company_logo}
        title={jobItem.title}
        company={jobItem.company}
        type={jobItem.type}
        location={jobItem.location}
        createdAt={jobItem.created_at}
        jobId={jobItem.url}/>
    ))
    showing = props.jobList.length;
  }
  return (
    <React.Fragment>
      {authRedirect}
      <NavigationBar
        title="Github Jobs"
        logoutClicked={() => props.onUnsetAuthenticated()}/>
      <Container>
        <main className={classes.JobList}>
          <h1>Showing {showing} jobs</h1>
          <ul className={classes.JobItemWrapper}>
            {jobList}
          </ul>
        </main>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.login.isAuth,
    jobList: state.jobList.jobList,
    success: state.jobList.success,
    error: state.jobList.error,
    loading: state.jobList.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetJobList: () => dispatch(actions.getJobList()),
    onUnsetAuthenticated: () => dispatch(actions.unsetAuthenticated())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList)