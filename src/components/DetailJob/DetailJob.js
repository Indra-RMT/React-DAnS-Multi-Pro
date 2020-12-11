import React, { useEffect } from 'react';
import {connect} from 'react-redux';  
import ReactHtmlParser from 'react-html-parser'
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import classes from './DetailJob.css';
import Container from '../UI/Container/Container';
import NavigationBar from '../UI/NavigationBar/NavigationBar';

const DetailJob = (props) => {

  useEffect(() => {
    const detailId = window.location.pathname.split("/")[2];
    props.onGetJobDetail(detailId);
  }, []);

  let authRedirect = null;
  if (!props.isAuth) {
    authRedirect = <Redirect to='/login' />
  }

  let jobDetail = null;
  if (props.jobDetail) {
    jobDetail = (
      <React.Fragment>
        <img src={props.jobDetail.company_logo} alt={`${props.jobDetail.company} logo`} />
        <h2>{props.jobDetail.title}</h2>
        <div>{props.jobDetail.company}</div>
        <div>{props.jobDetail.location}</div>
        <div>{props.jobDetail.type}</div>
        <div>{ReactHtmlParser(props.jobDetail.description)}</div>
        <div>{ReactHtmlParser(props.jobDetail.how_to_apply)}</div>
      </React.Fragment>
    )
  }
  
  return (
    <React.Fragment>
      {authRedirect}
      <NavigationBar
          title="Github Jobs"
          logoutClicked={() => props.onUnsetAuthenticated()}/>
        <Container>
        <main className={classes.DetailJob}>
          <h1>Detail Job</h1>
          <div className={classes.DetailJobWrapper}>
            {jobDetail}
          </div>
        </main>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.login.isAuth,
    jobList: state.jobList.jobList,
    jobDetail: state.jobList.jobDetail,
    success: state.jobList.success,
    error: state.jobList.error,
    loading: state.jobList.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetJobDetail: (detailId) => dispatch(actions.getJobDetail(detailId)),
    onUnsetAuthenticated: () => dispatch(actions.unsetAuthenticated())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailJob)