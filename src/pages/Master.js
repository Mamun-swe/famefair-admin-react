import React from 'react';
import './master.css';
import { Switch, Route } from 'react-router-dom';

import SideMenu from '../components/SideMenu';

import DashboardIndex from './Dashboard/Index';

// Category
import CategoryIndex from './Category/Index';
import CategoryEdit from './Category/Edit';

// Brand
import BrandIndex from './Brand/Index';
import BrandEdit from './Brand/Edit';

// Order
import OrderIndex from './Order/Index';

// Website Setting
// Banner
import BannerIndex from './Website_setting/Banner/Index';

// Contact
import ContactIndex from './Website_setting/Contact/Index';

const Master = () => {
    return (
        <div className="master">
            <SideMenu />
            <div className="main">
                <Switch>

                    {/* Dashboard */}
                    <Route exact path="/admin/" component={DashboardIndex} />

                    {/* Category */}
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />

                    {/* Brand */}
                    <Route exact path="/admin/brand" component={BrandIndex} />
                    <Route exact path="/admin/brand/:id/edit" component={BrandEdit} />

                    {/* Order */}
                    <Route exact path="/admin/order" component={OrderIndex} />

                    {/* Website Setting */}
                    {/* Banner */}
                    <Route exact path="/admin/setting/banner" component={BannerIndex} />

                    {/* Contact */}
                    <Route exact path="/admin/setting/contact" component={ContactIndex} />

                </Switch>
            </div>
        </div>
    );
};

export default Master;