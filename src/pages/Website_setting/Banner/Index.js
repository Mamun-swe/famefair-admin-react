import React, { useState, useEffect } from 'react'
import { Modal, message } from 'antd'
import { Icon } from 'react-icons-kit'
import api from '../../../url'
import axios from 'axios'
import './style.css'

import { plus } from 'react-icons-kit/metrize/plus'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete'
import Loader from '../../../components/Loader'
import EmptyCart from '../../../assets/images/empty-cart.png'

const Index = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [visible, setVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [emptyBanner, setEmptyBanner] = useState(false)
    const [banners, setBanners] = useState([])
    const [bannerId, setBannerId] = useState()

    // Modal Show
    const showModal = () => {
        setVisible(true)
    }

    // Modal Hide
    const handleCancel = e => {
        setVisible(false)
        setLoading(false)
    };

    // Handle Delete
    const handleDeleteModal = (data) => {
        setBannerId(data)
        setDeleteVisible(true)
    }

    // Hide delete
    const hideDelete = e => {
        setDeleteVisible(false)
        setLoading(false)
    }

    // Success Notification
    const success = msg => {
        message.success(msg);
    }

    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
        }
    }


    useEffect(() => {
        fetchData()
    }, [])



    // fetch data
    const fetchData = () => {
        setLoader(true)
        axios.get(`${api}admin/banner/index`)
            .then(res => {
                if (res.status === 204) {
                    setLoader(false)
                    return setEmptyBanner(true)
                }
                setBanners(res.data.results)
                setEmptyBanner(false)
                setLoader(false)
            })
    }


    // Submit Form
    const submitForm = (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append('banner_image', selectedFile)
        setLoading(true)
        axios.post(`${api}admin/banner/create`, formData)
            .then(res => {
                if (res.status === 201) {
                    fetchData()
                    setLoading(false)
                    success('Successfully banner added.')
                    setVisible(false)
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }


    // Submit Delete
    const submitDelete = () => {
        setLoading(true)
        axios.delete(`${api}admin/banner/delete/${bannerId}`)
            .then(res => {
                if (res.status === 200) {
                    fetchData()
                    setLoading(false)
                    success('Successfully one banner deleted.')
                    hideDelete()
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }

    return (
        <div className="banner-index">

            {loader ? (
                <Loader />
            ) :

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                {/* Header */}
                                <div className="card-header bg-white py-3">
                                    <div className="d-flex">
                                        <div>
                                            {emptyBanner ? (
                                                <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">0 Banner</h5>
                                            ) : <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{banners.length} Banner</h5>}
                                        </div>
                                        <div className="ml-auto">
                                            <button type="button" className="btn btn-light shadow-none text-dark" onClick={showModal}>
                                                <Icon icon={plus} size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {emptyBanner ? (
                                    <img src={EmptyCart} className="img-fluid empty-cart-img" alt='...' />
                                ) :
                                    <table className="table data-table table-sm table-borderless rounded">
                                        <thead>
                                            <tr className="border-bottom">
                                                <td className="pl-3"><p>SL</p></td>
                                                <td className="text-center"><p>Banner</p></td>
                                                <td className="text-center"><p>Action</p></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {banners.length > 0 && banners.map((data, i) =>
                                                <tr className="border-bottom" key={i}>
                                                    <td className="pl-3 pt-2"><p>{i + 1}</p></td>
                                                    <td className="text-center">
                                                        <img src={data.image} className="img-fluid" alt="..." />
                                                    </td>
                                                    <td className="text-center pt-2">
                                                        <button type="button" className="btn btn-light shadow-none btn-sm text-muted p-1" onClick={() => handleDeleteModal(data.id)}>
                                                            <Icon icon={androidDelete} size={20} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            }

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
                        {previewURL && selectedFile.size < 500000 ? (
                            <div className="text-center">
                                <img src={previewURL} className="img-fluid selected-image" alt="..." />
                            </div>
                        ) : <small className="text-danger">Select less than 500KB file</small>}
                        <br />
                        <input type="file" onChange={imageChangeHandeller} />
                    </div>

                    {previewURL && selectedFile.size < 500000 ? (
                        <button type="submit" className="btn btn-light shadow-none text-dark btn-block border-0">
                            {loading ? (
                                <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />ADDING...</p>
                            ) : <p className="mb-0">SUBMIT</p>}
                        </button>
                    ) : null}
                </form>

            </Modal>

            {/* Banner Delete Modal */}
            <Modal
                title="Are you sure want to delete ?"
                visible={deleteVisible}
                onCancel={hideDelete}
                footer={null}
            >
                <div>
                    <button type="button" className="btn btn-primary shadow-none text-white py-2 px-4" onClick={submitDelete}>
                        {loading ? (
                            <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />Deleting...</p>
                        ) : <p className="mb-0">Yes</p>}
                    </button>

                    <button type="button" className="btn btn-light shadow-none text-dark py-2 px-4 ml-2" onClick={hideDelete}>No</button>
                </div>
            </Modal>

            {/* Banner Delete Modal */}
        </div>
    );
};

export default Index;