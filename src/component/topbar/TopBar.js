import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o" /> <a href="mailto:contact@example.com">ngtrdai290197@gmail.com</a>
                        <i className="fa fa-phone" /> 0165.564.6549
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