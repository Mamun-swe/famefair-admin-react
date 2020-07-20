import React, { useState, useEffect } from 'react'
import './style.css'
import { Modal, message } from 'antd'
import axios from 'axios'
import URL from '../../url'
import { Icon } from 'react-icons-kit'

import { plus } from 'react-icons-kit/metrize/plus'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'

import BrandTable from '../../components/BrandTable'

const Index = () => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [brands, setBrands] = useState([])

    // Modal Show
    const showModal = () => {
        setVisible(true)
    }

    // Modal Hide
    const handleCancel = e => {
        setVisible(false)
        setLoading(false)
    };

    // Success Notification
    const success = () => {
        message.success('Successfully Added');
    };

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setBrands(res.data)
            })
    }

    // Submit Form
    const submitForm = (event) => {
        event.preventDefault()
        setLoading(true)
        success()
    }


    return (
        <div className="category">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            {/* Header */}
                            <div className="card-header bg-white py-3">
                                <div className="d-md-flex">
                                    <div>
                                        <div className="d-flex">
                                            <div><h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{brands.length} Brands</h5></div>
                                            <div className="ml-auto d-md-none">
                                                <button type="button" className="btn btn-light shadow-none text-dark" onClick={showModal}>
                                                    <Icon icon={plus} size={15} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto mt-2 mt-md-0">

                                        <form>
                                            <div className="row">
                                                <div className="col-8 pr-1">
                                                    <input
                                                        type="text"
                                                        name="busid"
                                                        className="form-control shadow-none"
                                                        placeholder="Search by name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-4 pl-1">
                                                    <button type="submit" className="btn btn-block btn-light shadow-none text-dark">Search</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="pl-2 d-none d-md-block">
                                        <button type="button" className="btn btn-light shadow-none text-dark" onClick={showModal}>
                                            <Icon icon={plus} size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Data Table */}

                            <BrandTable brand={brands} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Add Modal */}
            <Modal
                title="Make New Brand"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >

                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div className="form-group mb-3">
                        <small>Name</small>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-none" />
                    </div>

                    {/* File */}
                    <div className="form-group mb-4">
                        <small>Image</small>
                        <br />
                        <input type="file" />
                    </div>

                    <button type="submit" className="btn btn-light shadow-none text-dark btn-block border-0">
                        {loading ? (
                            <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />ADDING...</p>
                        ) : <p className="mb-0">SUBMIT</p>}
                    </button>
                </form>

            </Modal>
        </div>
    );
};

export default Index;