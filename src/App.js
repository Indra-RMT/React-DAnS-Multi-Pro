import React, { Suspense } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';

const App = (props) => {

  const Page404 = ({ location }) => {
		return (
			<div>
				<h2>No match found for <code>{location.pathname}</code></h2>
			</div>
    )
  }

  const routes = (
    <React.Fragment>
      <Switch>
        <Route path="/Login" render={(props) => <LoginPage {...props} />} />
        <Route path="/Detail" render={(props) => <DetailPage {...props} />} />
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  )

  return (
    <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
  );
}

export default App;