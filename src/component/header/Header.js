import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h1><a href="#body" className="scrollto">Taxi<span>Home</span></a></h1>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#body">Trang chủ</a></li>
                            <li><a href="#about">Giá cước xe</a></li>
                            <li><a href="#services">Loại xe</a></li>
                            <li><a href="#contact">Liên hệ</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;