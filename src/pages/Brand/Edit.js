import React, { useState } from 'react';
import './style.css';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { Modal, message } from 'antd'
import { useForm } from "react-hook-form";

import { arrow_left } from 'react-icons-kit/ikons/arrow_left'
import { spinner3 } from 'react-icons-kit/icomoon/spinner3'
import { plus } from 'react-icons-kit/metrize/plus'


const Edit = () => {
    const [cropBox, setCropBox] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const [submitLoading, setSubmitLoading] = useState(false)

    // Success Notification
    const success = () => {
        message.success('Successfully Updated.');
    };

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

    // Upload File
    const uploaFile = () => {
        setLoading(true)
    }

    // Submit Category
    const submitBrand = data => {
        console.log(data)
        setSubmitLoading(true)
        success()
    }


    return (
        <div className="category">
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
                                        {errors.brand_name && errors.brand_name.message ? (
                                            <small className="text-danger">{errors.brand_name && errors.brand_name.message}</small>
                                        ) : <small className="text-muted">Brand name</small>
                                        }
                                        <input
                                            type="text"
                                            name="brand_name"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "Brand name is required."
                                            })}
                                        />
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