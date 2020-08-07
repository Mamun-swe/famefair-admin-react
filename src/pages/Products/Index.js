import React, { useState, useEffect } from 'react'
import './style.css'
import { Icon } from 'react-icons-kit'
import axios from 'axios'
import api from '../../url'
import { Link } from 'react-router-dom'

import { plus } from 'react-icons-kit/metrize/plus'
import Loader from '../../components/Loader'
import PrductTable from '../../components/ProductTable'

import EmptyCart from '../../assets/images/empty-cart.png'

const Index = () => {
    const [loader, setLoader] = useState(false)
    const [emptyProduct, setEmptyProduct] = useState(false)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchCategories()
        fetchProducts()
    }, [])

    // fetch categories
    const fetchCategories = () => {
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

    // onChange Category
    const onChangeCategory = event => {
        if (event.target.value === 'All') {
            return fetchProducts()
        }
        axios.get(`${api}admin/product/index?category=${event.target.value}`)
            .then(res => {
                if (res.status === 204) {
                    setLoader(false)
                    return setEmptyProduct(true)
                }
                setProducts(res.data.results)
                setEmptyProduct(false)
                setLoader(false)
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }

    // fetch products
    const fetchProducts = () => {
        setLoader(true)
        axios.get(`${api}admin/product/index?category`)
            .then(res => {
                if (res.status === 204) {
                    setLoader(false)
                    return setEmptyProduct(true)
                }
                setProducts(res.data.results)
                setEmptyProduct(false)
                setLoader(false)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }



    return (
        <div className="product">

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
                                                    {emptyProduct ? (
                                                        <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">0 Products</h5>
                                                    ) : <h5 className="mb-0 mt-1 mt-lg-2 text-capitalize">{products.length} Products</h5>}
                                                </div>
                                                <div className="ml-auto d-md-none">
                                                    <Link to="/admin/product/create" type="button" className="btn btn-light shadow-none text-dark">
                                                        <Icon icon={plus} size={15} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ml-auto mt-2 mt-md-0">
                                            <select
                                                className="form-control shadow-none pl-2"
                                                onChange={onChangeCategory}
                                            >
                                                <option defaultValue="all">All</option>
                                                {categories.length > 0 && categories.map((category, i) =>
                                                    <option value={category.id} key={i}>{category.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="mt-2 mt-md-0 ml-md-2">

                                            <form>
                                                <div className="row">
                                                    <div className="col-8 pr-1">
                                                        <input
                                                            type="text"
                                                            name="name"
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
                                            <Link to="/admin/product/create" type="button" className="btn btn-light shadow-none text-dark">
                                                <Icon icon={plus} size={15} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Data Table */}

                                {emptyProduct ? (
                                    <img src={EmptyCart} className="img-fluid empty-cart-img" alt='...' />
                                ) : <PrductTable product={products} />}

                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
};

export default Index;