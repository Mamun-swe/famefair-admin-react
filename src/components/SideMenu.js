import React from 'react'
import './Side-Menu.css'
import $ from 'jquery'
import Dropdown from 'react-bootstrap/Dropdown'
import MenuItems from './MenuItems'

import UserImg from '../assets/images/user.jpg'
import BarIcon from '../assets/icons/bar.png'
import CogIcon from '../assets/icons/cog.png'
import LogoutIcon from '../assets/icons/logout.png'

const SideMenu = () => {

    const mobileMenuHandle = () => {
        $('.mobile-menu-content').toggleClass('show-menu')
    }
    return (
        <div className="side-menu">
            {/* Side Menu */}
            <div className="menu">
                <div className="menu-content shadow">

                    {/* Admin Info in Mobile Top Nav */}
                    <div className="mobile-menu px-3 py-2 shadow-sm d-lg-none">
                        <div className="d-flex">
                            <div>
                                <div className="img-box rounded-circle">
                                    <img src={UserImg} className="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="pl-2">
                                <p className="mb-0 text-capitalize">mamun</p>
                                <small className="text-muted text-capitalize">admin</small>
                            </div>
                            <div className="ml-auto pt-2">
                                <button type="button" className="btn btn-sm shadow-none" onClick={mobileMenuHandle}>
                                    <img src={BarIcon} alt="..." />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu-break d-lg-none"></div>

                    {/* Mobile Menu Content */}
                    <div className="mobile-menu-content d-lg-none">
                        <MenuItems />
                    </div>

                    {/* Admin Info in Desktop Menu */}
                    <div className="header d-none d-lg-block">
                        <div className="d-flex">
                            <div>
                                <div className="img-box rounded-circle">
                                    <img src={UserImg} className="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="pl-2">
                                <p className="mb-0 text-capitalize">mamun</p>
                                <small className="text-muted text-capitalize">admin</small>
                            </div>
                            <div className="ml-auto pt-2">
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" className="btn btn-sm shadow-none" id="dropdown-user">
                                        <img src={BarIcon} alt="..." />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu alignRight className="border-0 shadow rounded-0 p-0">
                                        <Dropdown.Item href="#"><img src={CogIcon} className="pr-2" alt="..." />Profile</Dropdown.Item>
                                        <Dropdown.Item href="#"><img src={LogoutIcon} className="pr-2" alt="..." />Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="body d-none d-lg-block">
                        <MenuItems />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SideMenu;