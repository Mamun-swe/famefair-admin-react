import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';

const PaymentPending = () => {
    const [paymentPendingOrders, setPaymentPendingOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setPaymentPendingOrders(res.data)
            })
    }


    return (
        <div>
            <OrderTable orders={paymentPendingOrders} />
        </div>
    );
};

export default PaymentPending;