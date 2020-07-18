import React from 'react'
import './Side-Menu.css'
import $ from 'jquery'
import { Icon } from 'react-icons-kit'
import { meter } from 'react-icons-kit/icomoon/meter'
import { thLarge } from 'react-icons-kit/typicons/thLarge'
import { gift } from 'react-icons-kit/typicons/gift'
import { chevronRight } from 'react-icons-kit/feather/chevronRight'
import { tags } from 'react-icons-kit/typicons/tags'
import { cart } from 'react-icons-kit/entypo/cart'
import { cog } from 'react-icons-kit/iconic/cog'
import { group } from 'react-icons-kit/fa/group'
import { power } from 'react-icons-kit/feather/power'
import { record } from 'react-icons-kit/ikons/record'
import { bell } from 'react-icons-kit/fa/bell'

import { NavLink } from 'react-router-dom'

const MenuItems = () => {

    const toggleProduct = () => {
        $('.sub-menu').toggle('50')
        $('.rotate').toggleClass('down')
        $('.toggle-dark').toggleClass('is-active')
    }

    return (
        <div>
            <NavLink exact to="/admin/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={meter} className="mr-3" /><span className="pt-3">Dashboard</span>
            </NavLink>
            <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={thLarge} className="mr-3" /><span className="pt-3">Categories</span>
            </NavLink>

            <button type="button" className="btn btn-block rounded-0 shadow-none toggle-dark" onClick={toggleProduct}>
                <Icon icon={gift} className="mr-3" /><span className="pt-3">products</span>
                <Icon icon={chevronRight} className="rotate float-right"></Icon>
            </button>

            {/* Sub Menu */}
            <div className="sub-menu pl-3">
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
                <NavLink exact to="/admin/category" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                    <Icon icon={record} className="mr-3" /><span className="pt-3">Categories</span>
                </NavLink>
            </div>


            <NavLink exact to="/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={tags} className="mr-3" /><span className="pt-3">brands</span>
            </NavLink>
            <NavLink exact to="/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={cart} className="mr-3" /><span className="pt-3">orders</span>
            </NavLink>
            <NavLink exact to="/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={cog} className="mr-3" /><span className="pt-3">settings</span>
            </NavLink>
            <NavLink exact to="/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={group} className="mr-3" /><span className="pt-3">admin</span>
            </NavLink>
            <NavLink exact to="/" type="button" activeClassName="is-active" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={bell} className="mr-3" /><span className="pt-3">notifications</span>
                <span className="float-right">10</span>
            </NavLink>
            <button type="button" className="btn btn-block rounded-0 shadow-none">
                <Icon icon={power} className="mr-3" /><span className="pt-3">logout</span>
            </button>
        </div>
    );
};

export default MenuItems;