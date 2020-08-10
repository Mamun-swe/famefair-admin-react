import React, { useState, useEffect } from 'react'
import './style.css'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { Modal, message } from 'antd'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import api from '../../url'

import { arrow_left } from 'react-icons-kit/ikons/arrow_left'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'
import { plus } from 'react-icons-kit/metrize/plus'
import Loader from '../../components/Loader'


const Edit = (props) => {
    const [cropBox, setCropBox] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const [submitLoading, setSubmitLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [brand, setBrand] = useState({})

    // Success Notification
    const success = () => {
        message.success('Successfully Updated.');
    }

    const failed = msg => {
        message.warning(msg)
    }

    // Header 
    const header = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        }
    }

    // Image Change
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
            setCropBox(true)
            setVisible(true)
        }
    }

    // Cancle File upload
    const cancleFileUpload = () => {
        setSelectedFile(null)
        setPreviewURL(null)
        setCropBox(false)
        setVisible(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        setLoader(true)
        axios.get(`${api}admin/brand/show/${props.match.params.id}`, header)
            .then(res => {
                setBrand(res.data)
                setLoader(false)
            })
            .catch(err => {
                if (err && err.response.status === 401) {
                    setLoader(false)
                    return failed(err.response.data.message);
                }
            })
    }

    // Upload File
    const uploaFile = () => {
        let formData = new FormData()
        formData.append('brand_image', selectedFile)
        setLoading(true)
        axios.put(`${api}admin/brand/update/${props.match.params.id}/image`, formData, header)
            .then(res => {
                if (res.status === 200) {
                    fetchData()
                    setLoading(false)
                    success()
                }
            })
            .catch(err => {
                if (err && err.response.status === 401) {
                    setLoading(false)
                    return failed(err.response.data.message);
                }
            })
    }

    // Submit Brand
    const submitBrand = data => {
        setSubmitLoading(true)
        axios.put(`${api}admin/brand/update/${props.match.params.id}`, data, header)
            .then(res => {
                if (res.status === 200) {
                    fetchData()
                    setSubmitLoading(false)
                    success()
                }
            })
            .catch(err => {
                if (err.response.status === 409) {
                    failed(err.response.data.message)
                    setSubmitLoading(false)
                }
                if (err && err.response.status === 401) {
                    setSubmitLoading(false)
                    return failed(err.response.data.message);
                }
            })
    }


    return (
        <div className="brand">

            {loader ? (
                <Loader />
            ) :

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white py-3">
                                    <div className="d-flex">
                                        <div><h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">brand edit</h5></div>
                                        <div className="ml-auto">
                                            <Link to="/admin/brand" type="button" className="btn btn-light shadow-none text-dark">
                                                <Icon icon={arrow_left} size={15} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(submitBrand)}>
                                        <div className="form-group mb-4">
                                            {errors.name && errors.name.message ? (
                                                <small className="text-danger">{errors.name && errors.name.message}</small>
                                            ) : <small className="text-muted">Brand name</small>
                                            }
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue={brand.name}
                                                className="form-control rounded-0 shadow-none"
                                                ref={register({
                                                    required: "Brand name is required."
                                                })}
                                            />
                                        </div>

                                        {/* Present File */}
                                        <div className="mb-2">
                                            <img src={brand.image} className="img-fluid border present-img" alt='...' />
                                        </div>


                                        {/* File Change */}
                                        <div className="d-flex">
                                            <div className="file-upload" onClick={() => setVisible(true)}>
                                                <div className="flex-center flex-column text-center">
                                                    <Icon icon={plus} size={25} className="text-muted" />
                                                </div>
                                            </div>
                                            <div className="pl-3">
                                                <button type="submit" className="btn btn-primary shadow-none text-white submit-btn">
                                                    {submitLoading ? (
                                                        <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />Updating...</p>
                                                    ) : <p className="mb-0">submit</p>}
                                                </button>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Image Change Modal */}
            <Modal
                title="Change image"
                visible={visible}
                onCancel={cancleFileUpload}
                footer={null}
            >
                <form>

                    {cropBox && previewURL && selectedFile.size < 100000 ? (
                        <div className="text-center">
                            <img src={previewURL} className="img-fluid" alt="..." />
                        </div>
                    ) : <h5 className="text-danger">Select less than 100KB file</h5>}

                    {/* File */}
                    <div className="form-group mt-2">
                        <small>Image</small>
                        <br />
                        <input type="file" onChange={imageChangeHandeller} />
                    </div>

                    {cropBox && previewURL && selectedFile.size < 100000 ? (
                        <div className="text-right">
                            <button type="button" className="btn btn-primary shadow-none text-white" onClick={uploaFile}>
                                {loading ? (
                                    <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />updating...</p>
                                ) : <p className="mb-0">update</p>}
                            </button>
                        </div>
                    ) : null}

                </form>
            </Modal>
        </div>
    );
};

export default Edit;