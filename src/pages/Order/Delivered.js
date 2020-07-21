import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';

const Delivered = () => {
    const [deliveredOrders, setDeliveredOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setDeliveredOrders(res.data)
            })
    }


    return (
        <div>
            <OrderTable orders={deliveredOrders} />
        </div>
    );
};

export default Delivered;