import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import axios from 'axios'
import URL from '../../url'
import './style.css'
import { Dropdown } from 'react-bootstrap'

import { plus } from 'react-icons-kit/metrize/plus'
import { androidPerson } from 'react-icons-kit/ionicons/androidPerson'
import { warning } from 'react-icons-kit/typicons/warning'

const Index = () => {
    const [admins, setAdmins] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setAdmins(res.data)
            })
    }


    return (
        <div className="admin-list">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            {/* Header */}
                            <div className="card-header bg-white py-3">
                                <div className="d-flex">
                                    <div><h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{admins.length} Admins</h5></div>
                                    <div className="ml-auto">
                                        <Link to="/admin/create" type="button" className="btn btn-light shadow-none text-dark">
                                            <Icon icon={plus} size={15} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="card-body p-0">
                                <table className="table data-table table-sm table-responsive-md table-borderless rounded">
                                    <thead>
                                        <tr className="border-bottom">
                                            <td className="pl-3"><p>SL</p></td>
                                            <td><p>Name</p></td>
                                            <td><p>E-mail</p></td>
                                            <td><p>Phone</p></td>
                                            <td><p>Role</p></td>
                                            <td className="text-center"><p>Status</p></td>
                                            <td className="text-center"><p>Action</p></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {admins.map((data, i) =>
                                            <tr className="border-bottom" key={i}>
                                                <td className="pl-3"><p>{data.id}</p></td>
                                                <td className="text-capitalize"><p>{data.name}</p></td>
                                                <td className="text-lowercase"><p>{data.email}</p></td>
                                                <td><p>{data.phone}</p></td>
                                                <td className="text-capitalize"><p>super admin</p></td>
                                                <td className="text-center text-capitalize">
                                                    <p className="text-success bg-light pb-1">active</p>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="btn btn-sm btn-success shadow-none py-1" variant="white" id="dropdown-basic">
                                                            Action
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu alignRight className="shadow border-0 rounded-0 p-0">
                                                            <Dropdown.Item as={Link} to={`/admin/${data.id}/profile`}>
                                                                <Icon icon={androidPerson} size={15} className="pr-2" />View Profile
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#"><Icon icon={warning} size={15} className="text-danger pr-2" />Block Account</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
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
        </div>
    );
};

export default Index;