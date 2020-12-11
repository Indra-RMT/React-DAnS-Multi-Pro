import React from 'react';

import classes from './NavigationBar.css';
import Container from '../Container/Container';

const NavigationBar = (props) => {
  return (
    <nav className={classes.NavigationBar}>
      <Container>
        <div className={classes.NavigationWrapper}>
          <div className={classes.Title}>{props.title}</div>
          <button
            className={classes.LogoutButton}
            label="Logout Button"
            onClick={props.logoutClicked}>Logout</button>
        </div>
      </Container>
    </nav>
  )
}

export default NavigationBar