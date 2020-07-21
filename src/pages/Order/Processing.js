import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';

const Processing = () => {
    const [processingOrders, setProcessingOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setProcessingOrders(res.data)
            })
    }


    return (
        <div>
            <OrderTable orders={processingOrders} />
        </div>
    );
};

export default Processing;