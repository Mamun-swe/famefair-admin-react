import React from 'react';
import './style.css'
import { NavLink, Switch, Route } from 'react-router-dom';

import TodayOrders from './TodayOrder';
import PaymentPendingOrders from './PaymentPending';

const Index = () => {
    return (
        <div className="order-index">
            <div className="container-fluid">

                {/* Order Count */}
                <div className="row">

                    <div className="col-6 col-md-3">
                        <div className="card shadow-sm order-count-card">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-success">12000+</h2>
                                <h6 className="mb-0">today</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="card shadow-sm order-count-card">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-warning">12000+</h2>
                                <h6 className="mb-0">this month</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="card shadow-sm order-count-card">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-info">12000+</h2>
                                <h6 className="mb-0">this year</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="card shadow-sm order-count-card">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-success">12000+</h2>
                                <h6 className="mb-0">total</h6>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End Order Count */}

                {/* Order Types */}
                <div className="row order-type-links">
                    <div className="col-6 col-sm-4 col-lg-2 pr-1">
                        <NavLink exact to="/admin/order/" activeClassName="is-active" className="btn btn-block shadow-sm">Today orders</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1 px-sm-1">
                        <NavLink exact to="/admin/order/payment-pending" activeClassName="is-active" className="btn btn-block shadow-sm">payment pending</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pr-1 pl-sm-1 pr-sm-3 px-lg-1">
                        <NavLink exact to="/" activeClassName="is-active" className="btn btn-block shadow-sm">processing</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1 pl-sm-3 pr-sm-1 px-lg-1">
                        <NavLink exact to="/" activeClassName="is-active" className="btn btn-block shadow-sm">shipped</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pr-1 pl-sm-1">
                        <NavLink exact to="/" activeClassName="is-active" className="btn btn-block shadow-sm">delivered</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1">
                        <NavLink exact to="/" activeClassName="is-active" className="btn btn-block shadow-sm">cancled</NavLink>
                    </div>
                </div>
                {/* End Order Types */}
            </div>

            {/* Order Pages */}
            <div className="order-type-pages">
                <Switch>
                    <Route exact path="/admin/order/" component={TodayOrders} />
                    <Route exact path="/admin/order/payment-pending" component={PaymentPendingOrders} />
                </Switch>
            </div>
        </div>
    );
};

export default Index;