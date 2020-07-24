import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProjectManagerRole } from '../enums/roles';
import managerRoutes from '../routes/managerRoutes';
import TopNavbar from '../components/layout/TopNavbar';
import SideMenu from '../components/layout/SideMenu';

const switchRoutes = (
    <Switch>
        {
            managerRoutes.map((route, key) => (
                <Route
                    key={key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
        }
    </Switch>
);

const ManagerContainer = () => {
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    return (
        <div id="wrapper">
            {user && <TopNavbar />}
            {user && <SideMenu />}
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row space-top">
                            {token && user && user.role === ProjectManagerRole ? switchRoutes : <Redirect to={`/authentication/sign-in`} />}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ManagerContainer;