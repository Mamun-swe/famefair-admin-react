import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';


const Shipped = () => {
    const [shippedOrders, setShippedOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setShippedOrders(res.data)
            })
    }


    return (
        <div>
            <OrderTable orders={shippedOrders} />
        </div>
    );
};

export default Shipped;