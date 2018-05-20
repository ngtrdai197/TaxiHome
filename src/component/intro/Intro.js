import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-content">
                    <h2>Hà Nội - Nội Bài <span><br />Chỉ từ: </span>150.000 VNĐ!</h2>
                    <hr/>
                    <h2>Nội Bài - Hà Nội<span><br />Chỉ từ: </span>200.000 VNĐ!</h2>
                    <div>
                        <a href="#about" className="btn-get-started scrollto">Hotline: 0165.5646549</a>
                        <a href="#portfolio" className="btn-projects scrollto">Phục vụ 24/7</a>
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