import React from 'react';
import './order_table.css';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { ic_search } from 'react-icons-kit/md/ic_search'
import { eye } from 'react-icons-kit/ionicons/eye'

const OrderTable = ({ orders }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-white">
                                <form>
                                    <div className="input-group filter-box">
                                        <input type="text" className="form-control form-control-sm shadow-none" placeholder="Search by phone" />
                                        <div className="input-group-prepend p-0">
                                            <div className="input-group-text p-0 border-0 bg-white">
                                                <button type="submit" className="btn btn-light shadow-none border-0 px-3">
                                                    <Icon icon={ic_search} size={24} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* body */}
                            <table className="table data-table table-sm table-responsive-lg table-borderless rounded">
                                <thead>
                                    <tr className="border-bottom">
                                        <td className="pl-3"><p>Order ID</p></td>
                                        <td><p>Customer Name</p></td>
                                        <td><p>Delivery Address</p></td>
                                        <td><p>Phone Number</p></td>
                                        <td><p>Total</p></td>
                                        <td className="text-center"><p>Payment Method</p></td>
                                        <td className="text-center"><p>Payment Status</p></td>
                                        <td className="text-center"><p>Order Status</p></td>
                                        <td className="text-center"><p>Action</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, i) =>
                                        <tr className="border-bottom" key={i}>
                                            <td className="pl-3"><p>{order.id}</p></td>
                                            <td className="text-capitalize"><p>{order.name}</p></td>
                                            <td className="text-capitalize"><p>{order.address.street}</p></td>
                                            <td><p>{order.phone}</p></td>
                                            <td className="text-uppercase"><p>2000 tk.</p></td>
                                            <td className="text-center"><p>Bkash</p></td>
                                            <td><p className="text-center text-success bg-light pb-1">Paid</p></td>
                                            <td><p className="text-center text-info bg-light pb-1">Pending</p></td>

                                            <td className="text-center">
                                                <Link to="/" type="button" className="btn btn-sm btn-light shadow-none py-1">
                                                    <Icon icon={eye} size={20} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTable;