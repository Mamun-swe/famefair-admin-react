import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="dashboard-index">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-success">12000+</h2>
                                    <h6 className="mb-0">users</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/all-admin">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">admin</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="card shadow-sm">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-warning">120</h2>
                                <h6 className="mb-0">total order</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="card shadow-sm">
                            <div className="flex-column flex-center text-center">
                                <h2 className="mb-2 text-success">120</h2>
                                <h6 className="mb-0">complete order</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">today order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order/payment-pending">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-danger">120</h2>
                                    <h6 className="mb-0">payment pending</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order/processing">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">processing</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order/shipped">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">shipped</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order/delivered">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">delivered</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/order/cancled">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">cancel order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/brand">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">brands</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/category">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-success">120</h2>
                                    <h6 className="mb-0">category</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/product">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">product</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Index;