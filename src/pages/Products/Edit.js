import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { message, Modal } from 'antd';
import axios from 'axios';
import api from '../../url';
import { useForm } from 'react-hook-form';

import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { spinner3 } from 'react-icons-kit/icomoon/spinner3';
import { plus } from 'react-icons-kit/metrize/plus';

const Edit = (props) => {
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [visible, setVisible] = useState(false)
    const [product, setProduct] = useState({})
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
        }
    }

    // Modal Show
    const showModal = () => {
        setVisible(true)
    }

    // Cancle File upload
    const cancleFileUpload = () => {
        setSelectedFile(null)
        setPreviewURL(null)
        setVisible(false)
        setImageLoading(false)
    }

    // Notification
    const success = msg => {
        message.success(msg)
    }

    const failed = msg => {
        message.warning(msg)
    }

    useEffect(() => {
        fetchProduct()
        fetchCategory()
        fetchBrands()
    }, [])

    // fetch product
    const fetchProduct = () => {
        axios.get(`${api}admin/product/show/${props.match.params.id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }

    // fetch category
    const fetchCategory = () => {
        axios.get(`${api}admin/category/index`)
            .then(res => {
                setCategories(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // fetch brand
    const fetchBrands = () => {
        axios.get(`${api}admin/brand/index`)
            .then(res => {
                setBrands(res.data.results)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }


    // submit from
    const onSubmit = data => {
        setLoading(true)
        axios.put(`${api}admin/product/update/${props.match.params.id}/info`, data)
            .then(res => {
                if (res.status === 200) {
                    fetchProduct()
                    fetchCategory()
                    fetchBrands()
                    setLoading(false)
                    success('Successfully updated')
                }
            })
            .catch(err => {
                if (err.response.status === 409) {
                    failed(err.response.data.message)
                    setLoading(false)
                }
            })
    }

    // Update Image
    const uploaFile = () => {
        let formData = new FormData()
        formData.append('product_image', selectedFile)
        setImageLoading(true)
        axios.put(`${api}admin/product/update/${props.match.params.id}/image`, formData)
            .then(res => {
                if (res.status === 200) {
                    fetchProduct()
                    setImageLoading(false)
                    setVisible(false)
                    success('Successfully updated')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }


    return (
        <div className="product">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-white py-3">
                                <div className="d-flex">
                                    <div>
                                        <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">Edit Product</h5>
                                    </div>
                                    <div className="ml-auto">
                                        <Link to="/admin/product/" type="button" className="btn btn-light shadow-none text-dark">
                                            <Icon icon={arrow_left} size={15} />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">

                                        {/* Name */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.name && errors.name.message ? (
                                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                                ) : <small className="text-muted">Name</small>
                                                }
                                                <input
                                                    name="name"
                                                    defaultValue={product.name}
                                                    type="text"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Name is required",
                                                        minLength: {
                                                            value: 5,
                                                            message: "Please enter minimum 5 characters",
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>


                                        {/* Product Code */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                <small>Product Code</small>
                                                <input
                                                    type="text"
                                                    defaultValue={product.code}
                                                    className="form-control shadow-none"
                                                    readOnly
                                                />
                                            </div>
                                        </div>


                                        {/* Price */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.price && errors.price.message ? (
                                                    <small className="text-danger">{errors.price && errors.price.message}</small>
                                                ) : <small className="text-muted">Price</small>
                                                }
                                                <input
                                                    name="price"
                                                    defaultValue={product.price}
                                                    type="number"
                                                    min="1"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Price is required"
                                                    })}
                                                />
                                            </div>
                                        </div>


                                        {/* Quantity */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.quantity && errors.quantity.message ? (
                                                    <small className="text-danger">{errors.quantity && errors.quantity.message}</small>
                                                ) : <small className="text-muted">Quantity</small>
                                                }
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    defaultValue={product.quantity}
                                                    min="1"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Quantity is required"
                                                    })}
                                                />
                                            </div>
                                        </div>


                                        {/* Brand */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.brand && errors.brand.message ? (
                                                    <small className="text-danger">{errors.brand && errors.brand.message}</small>
                                                ) : <small className="text-muted">Brand</small>
                                                }

                                                <select
                                                    name="brand"
                                                    className="form-control shadow-none pl-2"
                                                    ref={register({
                                                        required: "Quantity is required"
                                                    })}
                                                >
                                                    <option defaultValue={product.brand}>{product.brand}</option>

                                                    {brands.length > 0 && brands.map((brand, i) =>
                                                        <option value={brand.id} key={i}>{brand.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>


                                        {/* Category */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.category && errors.category.message ? (
                                                    <small className="text-danger">{errors.category && errors.category.message}</small>
                                                ) : <small className="text-muted">Category</small>
                                                }

                                                <select
                                                    name="category"
                                                    className="form-control shadow-none pl-2"
                                                    ref={register({
                                                        required: "Category is required"
                                                    })}
                                                >
                                                    <option defaultValue={product.category}>{product.category}</option>

                                                    {categories.length > 0 && categories.map((category, i) =>
                                                        <option value={category.id} key={i}>{category.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>


                                        {/* Description */}
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                {errors.description && errors.description.message ? (
                                                    <small className="text-danger">{errors.description && errors.description.message}</small>
                                                ) : <small className="text-muted">Description</small>
                                                }
                                                <textarea
                                                    name="description"
                                                    defaultValue={product.description}
                                                    className="form-control shadow-none"
                                                    rows="6"
                                                    ref={register({
                                                        required: "Description is required",
                                                        minLength: {
                                                            value: 50,
                                                            message: "Please enter minimum 50 characters",
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>


                                        {/* Image */}
                                        <div className="col-12 mb-2">
                                            <div className="d-flex">
                                                <div><img src={product.image} className="img-fluid selected-image border" alt="..." /></div>
                                                <div className="upload-button-box ml-2" onClick={showModal}>
                                                    <div className="flex-center flex-column text-center">
                                                        <Icon icon={plus} size={25} className="text-muted" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-12 text-right">
                                            <button type="submit" className="btn btn-primary shadow-none text-white px-4 submit-btn">
                                                {loading ? (
                                                    <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />updating...</p>
                                                ) : <p className="mb-0">update</p>}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Image Update Modal */}
            <Modal
                title="Change image"
                visible={visible}
                onCancel={cancleFileUpload}
                footer={null}
            >
                <form>

                    {previewURL && selectedFile.size < 200000 ? (
                        <div className="text-center">
                            <img src={previewURL} className="img-fluid" alt="..." />
                        </div>
                    ) : <h5 className="text-danger">Select less than 200KB file</h5>}

                    {/* File */}
                    <div className="form-group mt-2">
                        <small>Image</small>
                        <br />
                        <input type="file" onChange={imageChangeHandeller} />
                    </div>

                    {previewURL && selectedFile.size < 200000 ? (
                        <div className="text-right">
                            <button type="button" className="btn btn-primary shadow-none text-white" onClick={uploaFile}>
                                {imageLoading ? (
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