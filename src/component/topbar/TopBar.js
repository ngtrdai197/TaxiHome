import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o" /> <a href="mailto:taxinoibaihome@gmail.com">taxinoibaihome@gmail.com</a>
                        <i className="fa fa-phone" /> <a href="tel:01252301020">01252.301.020</a> 
                     </div>
                    <div className="social-links float-right">
                        <a href="#h01" className="twitter"><i className="fa fa-twitter" /></a>
                        <a href="#h01" className="facebook"><i className="fa fa-facebook" /></a>
                        <a href="#h01" className="instagram"><i className="fa fa-instagram" /></a>
                        <a href="#h01" className="google-plus"><i className="fa fa-google-plus" /></a>
                        <a href="#h01" className="linkedin"><i className="fa fa-linkedin" /></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopBar;