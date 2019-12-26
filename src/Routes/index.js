import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';

const Matches = lazy(() => import('../pages/Matches'));
const Home = lazy(() => import('../pages/Home'));
const Teams = lazy(() => import('../pages/Teams'));
const Login = lazy(() => import('../pages/Login'));

const Routes = (props) => {
    return(
        <Suspense
        fallback={
            <div className="loaderContainer">
              <div className="loaderWrapper">
                <div className="loader">Loading...</div>
              </div>
            </div>
          }
        >
        {props.isUserLoggedIn ?
          (<Switch>
            <Route path='/home' component={Home} />
            <Route path='/matches' component={Matches} />
            <Route path='/teams' component={Teams} />
            <Route path="/*" render={() => (<Redirect to='/home'/>)} />
          </Switch>)
          :
          (<Switch>
            <Route path='/login' component={Login} />
            <Route path="/*" render={() => (<Redirect to='/login' />)} />
          </Switch>)
        }
        </Suspense>
    );
}

export default Routes;