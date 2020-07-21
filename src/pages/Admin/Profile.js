import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'

import { androidPerson } from 'react-icons-kit/ionicons/androidPerson'
import { mail } from 'react-icons-kit/ikons/mail'
import { iosTelephone } from 'react-icons-kit/ionicons/iosTelephone'
import { gear } from 'react-icons-kit/fa/gear'
import { unlockAlt } from 'react-icons-kit/fa/unlockAlt'
import { arrow_left } from 'react-icons-kit/ikons/arrow_left'
import { edit } from 'react-icons-kit/ionicons/edit'

const Profile = () => {
    return (
        <div className="admin-list admin-profile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">


                                <div className="d-flex">
                                    <div>
                                        <h5 className="text-capitalize text-dark mb-4">
                                            <Icon icon={androidPerson} size={25} className="pr-2" />abdullah al mamun
                                        </h5>
                                    </div>
                                    <div className="ml-auto mr-2">
                                        <Link to="/admin/all-admin" type="button" className="btn btn-light shadow-none text-dark btn-sm">
                                            <Icon icon={arrow_left} size={15} />
                                        </Link>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-light shadow-none text-dark btn-sm">
                                            <Icon icon={edit} size={15} />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-lowercase"><Icon icon={mail} size={16} className="pr-2" />mamun@gmail.com</p>
                                <p className="text-lowercase"><Icon icon={iosTelephone} size={18} className="pr-2" />01533592610</p>
                                <p className="text-capitalize"><Icon icon={gear} size={18} className="pr-2" />super admin</p>
                                <p className="text-capitalize"><Icon icon={unlockAlt} size={18} className="pr-2" />
                                    <span className="text-success">active</span>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;