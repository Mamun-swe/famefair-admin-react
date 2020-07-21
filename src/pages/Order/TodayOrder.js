import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'
import URL from '../../url'
import OrderTable from '../../components/OrderTable';

const TodayOrder = () => {
    const [todayOrders, setTodayOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // fetch data
    const fetchData = () => {
        axios.get(`${URL}users`)
            .then(res => {
                setTodayOrders(res.data)
            })
    }

    return (
        <div>
            <OrderTable orders={todayOrders} />
        </div>
    );
};

export default TodayOrder;