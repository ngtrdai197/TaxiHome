import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main id="main">
                <section id="about" className="wow fadeInUp">
                    <div className="container">
                        <h1 >Bảng giá cước xe</h1>
                        <h3 className="hotline">Hotline: 0165.5646549</h3>
                        <div className="row">
                            {/* <div className="col-lg-6 about-img">
                                <img src="img/about-img.jpg" alt="#" />
                            </div>
                            <div className="col-lg-6 content">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                                <ul>
                                    <li><i className="ion-android-checkmark-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ion-android-checkmark-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="ion-android-checkmark-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div> */}

                            <table cellSpacing={0} cellPadding={0} style={{ width: '100%' }} className="box_tbl">
                                <tbody>
                                    <tr>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Loại xe</strong></p>
                                        </th>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Từ Hà Nội đến Nội Bài </strong></p>
                                        </th>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Từ Nội Bài đến Hà Nội</strong></p>
                                        </th>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Hai chiều (Khứ hồi)</strong></p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>04 chỗ</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>180.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>280.000</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>450.000 - 480.000 vnd</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>05 chỗ</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>250.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>300.000</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>480.000 - 520.000 vnd</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>7 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>350.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>450.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>700.000 vnd</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>16 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>800.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>800.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>1.200.000 vnd</strong></p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="section-header">
                            <h2>Loại xe chúng tôi có</h2>
                            <h4>Chúng tôi có đầy đủ các loại xe và các hãng xe để phục vụ nhu cầu của quý khách</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft">
                                    <div className="icon">
                                        <img src="http://hyundaivinhphuc.vn/wp-content/uploads/2015/11/hyunai-grand-i102.png" alt="i102" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 4 chỗ</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight">
                                
                                    <div className="icon">
                                    <img src="http://otopro.net/wp-content/uploads/oto/kia/K3.jpg" alt="i102" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 5 chỗ</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                    <img src="http://images.ndh.vn/Images/Uploaded/Share/2016/07/19/a88maudong-v1468086404.png" alt="i102" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 7 chỗ</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="icon">
                                    <img src="http://cuahangdochoioto.com/wp-content/uploads/2015/10/xe-ford-transit-16-cho-lap-dinh-vi.jpg" alt="i102" />
                                    
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 16 chỗ</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="clients" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Clients</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>
                        <div className="owl-carousel clients-carousel">
                            <img src="img/clients/client-1.png" alt="01" />
                            <img src="img/clients/client-2.png" alt="01" />
                            <img src="img/clients/client-3.png" alt="01" />
                            <img src="img/clients/client-4.png" alt="01" />
                            <img src="img/clients/client-5.png" alt="01" />
                            <img src="img/clients/client-6.png" alt="01" />
                            <img src="img/clients/client-7.png" alt="01" />
                            <img src="img/clients/client-8.png" alt="01" />
                        </div>
                    </div>
                </section>
                <section id="portfolio" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our Portfolio</h2>
                            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="" className="portfolio-popup">
                                        <img src="img/portfolio/1.jpg" alt="01" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 1</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/2.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 2</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/3.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 3</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/4.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 4</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/5.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 5</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/6.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 6</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/7.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 7</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="portfolio-item wow fadeInUp">
                                    <a href="#h01" className="portfolio-popup">
                                        <img src="img/portfolio/8.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Item 8</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Mọi người nhận xét về chúng tôi</h2>
                            <h5>Dưới đây là những nhận xét mới nhất về những khách hàng đã sử dụng dịch vụ của chúng tôi</h5>
                        </div>
                        <div className="owl-carousel testimonials-carousel">
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo, dịch vụ chăm sóc khách hàng tận tâm. Giá cả sản phẩm hợp lý. Tôi sẽ ủng hộ công ty thường xuyên vào thời gian tới.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-1.jpg" className="testimonial-img" alt="01" />
                                <h3>Nguyễn Văn Quyết</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo, dịch vụ chăm sóc khách hàng tận tâm. Giá cả sản phẩm hợp lý. Tôi sẽ ủng hộ công ty thường xuyên vào thời gian tới.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-2.jpg" className="testimonial-img" alt="01" />
                                <h3>Sara Wilsson</h3>
                                <h4>Nhân viên văn phòng</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo, dịch vụ chăm sóc khách hàng tận tâm. Giá cả sản phẩm hợp lý. Tôi sẽ ủng hộ công ty thường xuyên vào thời gian tới.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-3.jpg" className="testimonial-img" alt="01" />
                                <h3>Jena Karlis</h3>
                                <h4>Ca sĩ</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo, dịch vụ chăm sóc khách hàng tận tâm. Giá cả sản phẩm hợp lý. Tôi sẽ ủng hộ công ty thường xuyên vào thời gian tới.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-4.jpg" className="testimonial-img" alt="01" />
                                <h3>Matt Brandon</h3>
                                <h4>Kĩ sư</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thực sự hài lòng về trải nghiệm sản phẩm mà công ty mang lại. Chất lượng sản phẩm hoàn hảo, dịch vụ chăm sóc khách hàng tận tâm. Giá cả sản phẩm hợp lý. Tôi sẽ ủng hộ công ty thường xuyên vào thời gian tới.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-5.jpg" className="testimonial-img" alt="01" />
                                <h3>John Larson</h3>
                                <h4>Tự do</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="call-to-action" className="wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 text-center text-lg-left">
                                <h3 className="cta-title">Hãy gọi ngay cho chúng tôi</h3>
                                <p className="cta-text">Taxihome.com chuyên cung cấp dịch vụ taxi không mào đón tiễn sân bay giá rẻ, đưa đón nhân viên công ty và dịch vụ du lịch, taxi đi liên tỉnh giá rẻ. Giá rẻ nhưng không đồng nghĩa với dịch vụ kém, Chúng tôi luôn đặt chất lượng phục vụ lên hàng đầu, tin chắc quý khách sẽ cảm thấy hài lòng với đội ngũ lái xe nhiều năm kinh nghiệm, toàn bộ xe mới chất lượng cao, luôn chuyên nghiệp và tận tâm.</p>
                            </div>
                            <div className="col-lg-3 cta-btn-container text-center">
                                <a className="cta-btn align-middle" href="#h01">HOTLINE: <br/> 0165.564.6549</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="img/team-1.jpg" alt="01" /></div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href="#h01"><i className="fa fa-twitter" /></a>
                                            <a href="#h01"><i className="fa fa-facebook" /></a>
                                            <a href="#h01"><i className="fa fa-google-plus" /></a>
                                            <a href="#h01"><i className="fa fa-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="img/team-2.jpg" alt="01" /></div>
                                    <div className="details">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Product Manager</span>
                                        <div className="social">
                                            <a href="#h01"><i className="fa fa-twitter" /></a>
                                            <a href="#h01"><i className="fa fa-facebook" /></a>
                                            <a href="#h01"><i className="fa fa-google-plus" /></a>
                                            <a href="#h01"><i className="fa fa-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="img/team-3.jpg" alt="01" /></div>
                                    <div className="details">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <div className="social">
                                            <a href="#h01"><i className="fa fa-twitter" /></a>
                                            <a href="#h01"><i className="fa fa-facebook" /></a>
                                            <a href="#h01"><i className="fa fa-google-plus" /></a>
                                            <a href="#h01"><i className="fa fa-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="img/team-4.jpg" alt="01" /></div>
                                    <div className="details">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <div className="social">
                                            <a href="#h01"><i className="fa fa-twitter" /></a>
                                            <a href="#h01"><i className="fa fa-facebook" /></a>
                                            <a href="#h01"><i className="fa fa-google-plus" /></a>
                                            <a href="#h01"><i className="fa fa-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Liên hệ với chúng tôi</h2>
                            <p>Hãy liên hệ ngay với chúng tôi để nhận được sự phục vụ nhiệt tình của đội ngũ lái xe, và trải nghiệm tuyệt vời với đội ngũ của chúng tôi. Luôn phục vụ quý khách những điều tốt nhất !</p>
                        </div>
                        <div className="row contact-info">
                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="ion-ios-location-outline" />
                                    <h3>Address</h3>
                                    <address>A108 Adam Street, NY 535022, USA</address>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="ion-ios-telephone-outline" />
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">0165.564.6549</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="ion-ios-email-outline" />
                                    <h3>Email</h3>
                                    <h3><a href="mailto:ngtrdai290197@gmail.com">ngtrdai290197@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Main;