import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal, message } from 'antd';
import "antd/dist/antd.css";
import { Icon } from 'react-icons-kit';
import axios from 'axios';
import api from '../url';

import { spinner3 } from 'react-icons-kit/icomoon/spinner3'

const ProductTable = ({ product }) => {
    const [visible, setVisible] = useState(false)
    const [productId, setProductId] = useState()
    const [loading, setLoading] = useState(false)

    // Handle Delete
    const handleDeleteModal = id => {
        setVisible(true)
        setProductId(id)
    }

    const handleCancel = () => {
        setVisible(false)
        setLoading(false)
    }

    // Message
    const success = () => {
        message.success('Successfully one product deleted.')
    }

    // Submit delete
    const submitDelete = () => {
        setLoading(true)
        axios.delete(`${api}admin/product/delete/${productId}`)
            .then(res => {
                if (res.status === 200) {
                    setLoading(false)
                    setVisible(false)
                    success()
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err.response)
                }
            })
    }


    return (
        <div>
            <table className="table data-table table-sm table-responsive-sm table-borderless rounded">
                <thead>
                    <tr className="border-bottom">
                        <td className="pl-3"><p>SL</p></td>
                        <td><p>Name</p></td>
                        <td><p>Product Code</p></td>
                        <td><p>Brand</p></td>
                        <td><p>Category</p></td>
                        <td><p>Price</p></td>
                        <td><p>Quantity</p></td>
                        <td className="text-center"><p>Image</p></td>
                        <td className="text-center"><p>Action</p></td>
                    </tr>
                </thead>
                <tbody>
                    {product.length > 0 && product.map((data, i) =>
                        <tr className="border-bottom" key={i}>
                            <td className="pl-3 pt-3"><p>{i + 1}</p></td>
                            <td className="text-capitalize pt-3"><p>{data.name}</p></td>
                            <td className="text-capitalize pt-3"><p>{data.code}</p></td>
                            <td className="text-capitalize pt-3"><p>{data.brand}</p></td>
                            <td className="text-capitalize pt-3"><p>{data.category}</p></td>
                            <td className="text-capitalize pt-3"><p>{data.price} TK.</p></td>
                            <td className="text-capitalize pt-3"><p>{data.quantity} Pcs.</p></td>
                            <td className="text-center">
                                <img src={data.image} className="img-fluid" alt="..." />
                            </td>
                            <td className="text-center pt-3">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-sm btn-success shadow-none py-1" variant="white" id="dropdown-basic">
                                        Action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu alignRight className="shadow border-0 rounded-0 p-0">
                                        <Dropdown.Item as={Link} to={`/admin/product/${data.id}/edit`}>Edit</Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={() => handleDeleteModal(data.id)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>


            {/* Product Delete Modal */}
            <Modal
                title="Are you sure want to delete ?"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <button type="button" className="btn btn-primary shadow-none text-white py-2 px-4" onClick={submitDelete}>
                        {loading ? (
                            <p className="mb-0"><Icon icon={spinner3} size={15} className="spin mr-2" />Deleting...</p>
                        ) : <p className="mb-0">Yes</p>}
                    </button>

                    <button type="button" className="btn btn-light shadow-none text-dark py-2 px-4 ml-2" onClick={handleCancel}>No</button>
                </div>
            </Modal>

            {/* Product Delete Modal */}
        </div>
    );
};

export default ProductTable;