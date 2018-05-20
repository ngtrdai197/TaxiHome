import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong>TaxiHome</strong>. All Rights Reserved by TaxiHome
                        </div>
                    </div>
                </footer>
                <a href="#h01" className="back-to-top"><i className="fa fa-chevron-up" /></a>
            </div>
        );
    }
}

export default Footer;