import React from 'react';
import './master.css';
import { Switch, Route } from 'react-router-dom';

import SideMenu from '../components/SideMenu';
import DashboardIndex from './Dashboard/Index';
import CategoryIndex from './Category/Index';
import CategoryEdit from './Category/Edit';
import ProductIndex from './Products/Index';
import ProductCreate from './Products/Create';
import ProductEdit from './Products/Edit';
import BrandIndex from './Brand/Index';
import BrandEdit from './Brand/Edit';
import OrderIndex from './Order/Index';
import BannerIndex from './Website_setting/Banner/Index';
import ContactIndex from './Website_setting/Contact/Index';
import AdminIndex from './Admin/Index';
import AdminCreate from './Admin/Create';
import AdminEdit from './Admin/Edit';
import AdminProfile from './Admin/Profile';

const Master = () => {
    return (
        <div className="master">
            <SideMenu />
            <div className="main">
                <Switch>

                    <Route exact path="/admin/" component={DashboardIndex} />
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />
                    <Route exact path="/admin/product" component={ProductIndex} />
                    <Route exact path="/admin/product/create" component={ProductCreate} />
                    <Route exact path="/admin/product/:id/edit" component={ProductEdit} />
                    <Route exact path="/admin/brand" component={BrandIndex} />
                    <Route exact path="/admin/brand/:id/edit" component={BrandEdit} />
                    <Route path="/admin/order" component={OrderIndex} />
                    <Route exact path="/admin/setting/banner" component={BannerIndex} />
                    <Route exact path="/admin/setting/contact" component={ContactIndex} />
                    <Route exact path="/admin/all-admin" component={AdminIndex} />
                    <Route exact path="/admin/create" component={AdminCreate} />
                    <Route exact path="/admin/:id/edit" component={AdminEdit} />
                    <Route exact path="/admin/:id/profile" component={AdminProfile} />

                </Switch>
            </div>
        </div>
    );
};

export default Master;