import React from 'react';
import './master.css';
import { Switch, Route } from 'react-router-dom';

import SideMenu from '../components/SideMenu';

import DashboardIndex from './Dashboard/Index';
import CategoryIndex from './Category/Index';
import CategoryEdit from './Category/Edit';

const Master = () => {
    return (
        <div className="master">
            <SideMenu />
            <div className="main">
                <Switch>

                    {/* Dashboard */}
                    <Route exact path="/admin/" component={DashboardIndex} />
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />

                </Switch>
            </div>
        </div>
    );
};

export default Master;