import React, { useState, useEffect } from 'react'
import { Modal, message } from 'antd'
import { Icon } from 'react-icons-kit'
import URL from '../../../url'
import axios from 'axios'
import './style.css'

import { plus } from 'react-icons-kit/metrize/plus'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete'
import bannerImg from '../../../assets/images/category.jpg'


const Index = () => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [banners, setBanners] = useState([])

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
                setBanners(res.data)
            })
    }

    // Submit Form
    const submitForm = (event) => {
        event.preventDefault()
        setLoading(true)
        success()
    }

    return (
        <div className="banner-index">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            {/* Header */}
                            <div className="card-header bg-white py-3">
                                <div className="d-flex">
                                    <div><h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{banners.length} Banner</h5></div>
                                    <div className="ml-auto">
                                        <button type="button" className="btn btn-light shadow-none text-dark" onClick={showModal}>
                                            <Icon icon={plus} size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <table className="table data-table table-sm table-borderless rounded">
                                <thead>
                                    <tr className="border-bottom">
                                        <td className="pl-3"><p>SL</p></td>
                                        <td className="text-center"><p>Banner</p></td>
                                        <td className="text-center"><p>Action</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banners.map((data, i) =>
                                        <tr className="border-bottom" key={i}>
                                            <td className="pl-3 pt-3"><p>{data.id}</p></td>
                                            <td className="text-center">
                                                <img src={bannerImg} className="img-fluid" alt="..." />
                                            </td>
                                            <td className="text-center pt-3">
                                                <button type="button" className="btn btn-light shadow-none btn-sm text-muted p-1">
                                                    <Icon icon={androidDelete} size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Add Modal */}
            <Modal
                title="Add New Banner"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >

                <form onSubmit={submitForm}>
                    {/* File */}
                    <div className="form-group mb-4">
                        <small>Banner</small>
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