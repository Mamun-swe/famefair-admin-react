import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { message } from 'antd';
import axios from 'axios';
import api from '../../url';
import { useForm } from 'react-hook-form';

import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { spinner3 } from 'react-icons-kit/icomoon/spinner3';

const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    // Notification
    const success = msg => {
        message.success(msg)
    }

    const failed = msg => {
        message.warning(msg)
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
        fetchCategory()
        fetchBrands()
    }, [])

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


    // Submit Form
    const onSubmit = data => {
        let formData = new FormData()
        formData.append('brand_id', data.brand)
        formData.append('category_id', data.category)
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('quantity', data.quantity)
        formData.append('description', data.description)
        formData.append('product_image', selectedFile)
        setLoading(true)
        axios.post(`${api}admin/product/create`, formData)
            .then(res => {
                if (res.status === 201) {
                    setLoading(false)
                    success('Successfully one product added')
                }
            })
            .catch(err => {
                if (err.response.status === 409 && err.response.data.message === 'exist') {
                    failed('This product already created .')
                    setLoading(false)
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
                                <div className="d-md-flex">
                                    <div><h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">Create New Product</h5></div>
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
                                                    type="text"
                                                    name="name"
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

                                        {/* Price */}
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group mb-3">
                                                {errors.price && errors.price.message ? (
                                                    <small className="text-danger">{errors.price && errors.price.message}</small>
                                                ) : <small className="text-muted">Price</small>
                                                }
                                                <input
                                                    type="number"
                                                    name="price"
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
                                                    {brands.length > 0 && brands.map((brand, i) =>
                                                        <option value={brand.id} key={i}>{brand.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Category */}
                                        <div className="col-12">
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
                                                    className="form-control shadow-none"
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


                                        {/* File */}
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                {previewURL && selectedFile.size < 200000 ? (
                                                    <img src={previewURL} className="img-fluid selected-image" alt="..." />
                                                ) : <small className="text-danger">Select less than 200KB file</small>}
                                                <br />
                                                <br />
                                                <input type="file" onChange={imageChangeHandeller} />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            {previewURL && selectedFile.size < 200000 ? (
                                                <button type="submit" className="btn btn-primary shadow-none text-white px-4 submit-btn">
                                                    {loading ? (
                                                        <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />adding...</p>
                                                    ) : <p className="mb-0">submit</p>}
                                                </button>
                                            ) : null}
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;