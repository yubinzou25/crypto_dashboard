import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
export default function NavBar(){
    const menuItems = [{
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined/>,
        key: 'home'
    },{
        label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        icon: <FundOutlined/>,
        key: 'ryptocurrencies'
    },{
        label: <Link to="/exchanges">Exchanges</Link>,
        icon: <MoneyCollectOutlined/>,
        key: 'exchanges'
    },{
        label: <Link to="/news">News</Link>,
        icon: <BulbOutlined/>,
        key: 'news'
    }]
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
            </div>
            <Menu mode="vertical" theme="dark" items={menuItems}>
            </Menu>
        </div>
    );
}