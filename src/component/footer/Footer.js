import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong>TaxiHome</strong>. All Rights Reserved by TaxiHome (Designer Nguyen Trong Dai)
                        </div>
                    </div>
                </footer>
                <a href="#h01" className="back-to-top"><i className="fa fa-chevron-up" /></a>
                <a href="tel: 01252301020" className="back-to-top tele-fixed wow tada" data-wow-iteration="250" title="Gọi ngay cho chúng tôi"><i className="fa fas fa-phone" /></a>
            </div>
        );
    }
}

export default Footer;