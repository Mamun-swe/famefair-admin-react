import React, { useState, useEffect } from 'react';
import './style.css';
import { Icon } from 'react-icons-kit';
import axios from 'axios';
import api from '../../url';

import { androidPerson } from 'react-icons-kit/ionicons/androidPerson';
import { mail } from 'react-icons-kit/ikons/mail';
import { iosTelephone } from 'react-icons-kit/ionicons/iosTelephone';
import { gear } from 'react-icons-kit/fa/gear';
import { unlockAlt } from 'react-icons-kit/fa/unlockAlt';
import fakeImg from '../../assets/images/blank.jpg';
// import { edit } from 'react-icons-kit/ionicons/edit'

const Profile = (props) => {
    const [admin, setAdmin] = useState({})

    useEffect(() => {
        fetchAdmin()
    }, [])


    // fetch admin
    const fetchAdmin = () => {
        axios.get(`${api}admin/auth/me/${props.match.params.id}`)
            .then(res => {
                setAdmin(res.data.admin)
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    return (
        <div className="admin-list admin-profile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-body py-4 py-md-5">

                                <div className="img-box rounded-circle">
                                    <img src={fakeImg} className="img-fluid" alt="..." />
                                </div>

                                <div className="info-box mt-4">
                                    <h5 className="text-capitalize text-dark mb-2">
                                        <Icon icon={androidPerson} size={25} className="pr-2" />{admin.name}
                                    </h5>
                                    <p className="text-lowercase"><Icon icon={mail} size={16} className="pr-2" />{admin.email}</p>
                                    <p className="text-lowercase"><Icon icon={iosTelephone} size={18} className="pr-2" />{admin.phoneNumber}</p>
                                    <p className="text-capitalize"><Icon icon={gear} size={18} className="pr-2" />{admin.role}</p>
                                    <p className="text-capitalize"><Icon icon={unlockAlt} size={18} className="pr-2" />
                                        <span className="text-success">{admin.status}</span>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;