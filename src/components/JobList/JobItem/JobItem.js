import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './JobItem.css';

const JobItem = (props) => {
  const linkToId = (link) => {
    const arr = link.split("/");
    return arr[4]
  }
  
  return (
    <NavLink 
      className={classes.JobItem}
      to={`/detail/${linkToId(props.jobId)}`}
      exact={false}>
      <li >
        <div className={classes.MainWrapper}>
          <div className={classes.CompanyLogo}>
            <img src={props.companyLogo} alt={`${props.title}logo`}/>  
          </div>
          <div className={classes.DetailWrapper}>
            <h2>{props.title}</h2>
            <div>
              <div className={classes.Company}>{props.company}</div>
              <div className={classes.Dash}> - </div>
              <div className={classes.Type}>{props.type}</div>
            </div>
            <span className={classes.Location}>{props.location}</span>
          </div>
        </div>
        <div className={classes.SecondaryWrapper}>
          <div className={classes.CreatedAt}>{props.createdAt}</div>
        </div>
      </li>
    </NavLink>
  )
}

export default JobItem;
