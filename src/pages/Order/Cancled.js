import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';

const Cancled = () => {
    const [cancleOrders, setCancleOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setCancleOrders(res.data)
            })
    }


    return (
        <div>
            <OrderTable orders={cancleOrders} />
        </div>
    );
};

export default Cancled;