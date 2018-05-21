import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-content">
                    <h2>Hà Nội - Nội Bài <span><br />Chỉ từ: </span>170.000 VNĐ!</h2>
                    <hr/>
                    <h2>Nội Bài - Hà Nội<span><br />Chỉ từ: </span>270.000 VNĐ!</h2>
                    <div>
                        <a href="tel:01252301020" className="btn-get-started scrollto">Hotline: 01252.301.020</a>
                        <a href="tel:0912599550" className="btn-projects scrollto">Phục vụ 24/7</a>
                    </div>
                </div>
                <div id="intro-carousel" className="owl-carousel">
                    <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/1.jpg")' }} />
                    <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/2.jpg")' }} />
                    <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/3.jpg")' }} />
                    <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/4.jpg")' }} />
                    <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/5.jpg")' }} />
                </div>
            </section>
        );
    }
}

export default Intro;