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
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">new user</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">total order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-success">120</h2>
                                    <h6 className="mb-0">complete order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">pending order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-danger">120</h2>
                                    <h6 className="mb-0">cancle order</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">collections</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">new collections</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">brands</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-warning">120</h2>
                                    <h6 className="mb-0">new brands</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-info">120</h2>
                                    <h6 className="mb-0">products</h6>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/admin/">
                            <div className="card shadow-sm">
                                <div className="flex-column flex-center text-center">
                                    <h2 className="mb-2 text-success">120</h2>
                                    <h6 className="mb-0">new products</h6>
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