import React, { useState, useEffect } from 'react'
import './style.css'
import { Modal, message } from 'antd'
import axios from 'axios'
import api from '../../url'
import { Icon } from 'react-icons-kit'
import { useForm } from 'react-hook-form'

import { plus } from 'react-icons-kit/metrize/plus'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'
import EmptyCart from '../../assets/images/empty-cart.png'

import BrandTable from '../../components/BrandTable'
import Loader from '../../components/Loader'

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [emptyBrand, setEmptyBrand] = useState(false)
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
    }

    const failed = (msg) => {
        message.warning(msg);
    }

    // Header 
    const header = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        }
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
        axios.get(`${api}admin/brand/index`, header)
            .then(res => {
                if (res.status === 204) {
                    setLoader(false)
                    return setEmptyBrand(true)
                }
                setBrands(res.data.results)
                setEmptyBrand(false)
                setLoader(false)
            })
            .catch(err => {
                if (err && err.response.status === 401) {
                    setLoader(false)
                    return failed(err.response.data.message);
                }
            })
    }

    // Submit Form
    const submitBrand = data => {
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('brand_image', selectedFile)
        setLoading(true)
        axios.post(`${api}admin/brand/create`, formData, header)
            .then(res => {
                if (res.status === 201) {
                    fetchData()
                    setLoading(false)
                    success()
                    setVisible(false)
                }
            })
            .catch(err => {
                if (err.response.status === 409 && err.response.data.message === 'exist') {
                    failed('This brand already created .')
                    setLoading(false)
                }
                if (err && err.response.status === 401) {
                    setLoading(false)
                    return failed(err.response.data.message);
                }
            })
    }


    return (
        <div className="category">

            {loader ? (
                <Loader />
            ) :

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                {/* Header */}
                                <div className="card-header bg-white py-3">
                                    <div className="d-md-flex">
                                        <div>
                                            <div className="d-flex">
                                                <div>
                                                    {emptyBrand ? (
                                                        <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">0 Brands</h5>
                                                    ) : <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{brands.length} Brands</h5>}
                                                </div>
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

                                {emptyBrand ? (
                                    <img src={EmptyCart} className="img-fluid empty-cart-img" alt='...' />
                                ) : <BrandTable brand={brands} />}

                            </div>
                        </div>
                    </div>
                </div>

            }

            {/* Category Add Modal */}
            <Modal
                title="Make New Brand"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >

                <form onSubmit={handleSubmit(submitBrand)}>
                    {/* Name */}
                    <div className="form-group mb-3">
                        {errors.name && errors.name.message ? (
                            <small className="text-danger">{errors.name && errors.name.message}</small>
                        ) : <small className="text-muted">Name</small>
                        }
                        <input
                            type="text"
                            name="name"
                            className="form-control rounded-0 shadow-none"
                            ref={register({
                                required: "Name is required."
                            })}
                        />
                    </div>

                    {/* File */}
                    <div className="form-group mb-4">
                        {previewURL && selectedFile.size < 100000 ? (
                            <div className="text-center">
                                <img src={previewURL} className="img-fluid selected-image" alt="..." />
                            </div>
                        ) : <small className="text-danger">Select less than 100KB file</small>}
                        <br />
                        <input type="file" onChange={imageChangeHandeller} />
                    </div>

                    {previewURL && selectedFile.size < 100000 ? (
                        <button type="submit" className="btn btn-light shadow-none text-dark btn-block border-0">
                            {loading ? (
                                <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />ADDING...</p>
                            ) : <p className="mb-0">SUBMIT</p>}
                        </button>
                    ) : null}
                </form>

            </Modal>
        </div>
    );
};

export default Index;