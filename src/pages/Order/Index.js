import React from 'react';
import './style.css'
import { NavLink, Route } from 'react-router-dom';

import TodayOrders from './TodayOrder';
import PaymentPendingOrders from './PaymentPending';
import Processing from './Processing';
import Shipped from './Shipped';
import Delivered from './Delivered';
import Cancled from './Cancled';

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
                <div className="row order-type-links mb-3">
                    <div className="col-6 col-sm-4 col-lg-2 pr-1">
                        <NavLink exact to="/admin/order/" activeClassName="is-active" className="btn btn-block shadow-sm">Today orders</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1 px-sm-1">
                        <NavLink exact to="/admin/order/payment-pending" activeClassName="is-active" className="btn btn-block shadow-sm">payment pending</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pr-1 pl-sm-1 pr-sm-3 px-lg-1">
                        <NavLink exact to="/admin/order/processing" activeClassName="is-active" className="btn btn-block shadow-sm">processing</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1 pl-sm-3 pr-sm-1 px-lg-1">
                        <NavLink exact to="/admin/order/shipped" activeClassName="is-active" className="btn btn-block shadow-sm">shipped</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pr-1 pl-sm-1">
                        <NavLink exact to="/admin/order/delivered" activeClassName="is-active" className="btn btn-block shadow-sm">delivered</NavLink>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 pl-1">
                        <NavLink exact to="/admin/order/cancled" activeClassName="is-active" className="btn btn-block shadow-sm">cancled</NavLink>
                    </div>
                </div>
                {/* End Order Types */}
            </div>

            {/* Order Pages */}
            <div className="order-type-pages">
                <Route exact path="/admin/order/" component={TodayOrders} />
                <Route path="/admin/order/payment-pending" component={PaymentPendingOrders} />
                <Route path="/admin/order/processing" component={Processing} />
                <Route path="/admin/order/shipped" component={Shipped} />
                <Route path="/admin/order/delivered" component={Delivered} />
                <Route path="/admin/order/cancled" component={Cancled} />
            </div>
        </div>
    );
};

export default Index;