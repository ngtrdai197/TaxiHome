import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main id="main">
                <section id="about" className="wow fadeInUp">
                    <div className="container">
                        <h1 >Bảng giá cước xe</h1>
                        <h1 className="hotline"><a href="tel:01252301020">Hotline: <br/>01252.301.020</a><br/><a href="tel:0912599550">0912.599.550</a></h1>
                        <div className="row">
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
                                            <p style={{ textAlign: 'center' }}><strong>170.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>270.000</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>440.000 - 470.000 vnd</strong></p>
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
                                            <p style={{ textAlign: 'center' }}><strong>290.000</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>470.000 - 510.000 vnd</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>7 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>340.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>440.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>690.000 vnd</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>16 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>790.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>790.000 vnd</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>1.190.000 vnd</strong></p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <br/>
                        <br/>
                        <h1 >Bảng giá cước xe đi tỉnh</h1>
                        <h1 className="hotline"><a href="tel:01252301020">Hotline: <br/>01252.301.020</a><br/><a href="tel:0912599550">0912.599.550</a></h1>
                        <div className="row">
                            <table cellSpacing={0} cellPadding={0} style={{ width: '100%' }} className="box_tbl">
                                <tbody>
                                    <tr>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Loại xe</strong></p>
                                        </th>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Đi 1 chiều </strong></p>
                                        </th>
                                        <th style={{ height: 19 }}>
                                            <p style={{ textAlign: 'center' }}><strong>Đi 2 chiều (khứ hồi)</strong></p>
                                        </th>

                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>04 chỗ</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>9.500 đ/km</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>11.000 đ/km</strong></p>
                                        </td>
                                    
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>05 chỗ</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>9.500 đ/km</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>11.000 đ/km</strong></p>
                                        </td>
                                     
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>7 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>9.500 đ/km</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>11.000 đ/km</strong></p>
                                        </td>
                                   
                                    </tr>
                                    <tr>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>16 chỗ&nbsp;</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>9.500 đ/km</strong></p>
                                        </td>
                                        <td style={{ height: 18 }}>
                                            <p style={{ textAlign: 'center' }}><strong>11.000 đ/km</strong></p>
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
                                        <img src="img/hyunai-grand-i102.png" alt="i102" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 4 chỗ</a></h4>
                                    <p className="description">Loại xe này có không gian nội thất thoáng với các chỗ ngồi có phần ghế và khoang để chân thoải mái hơn, bên cạnh đó là phần cốp khá rộng rãi để chứa hành lý.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight">

                                    <div className="icon">
                                        <img src="img/K3.jpg" alt="Xe 5 chỗ" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 5 chỗ</a></h4>
                                    <p className="description">Loại xe này có không gian nội thất thoáng hơn xe 4 chỗ, thiết kế cực kỳ ấn tượng và một không gian nội thất trẻ trung, đầy phá cách và ấn tượng, đẳng cấp ngay từ cái nhìn đầu tiên.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src="img/a88maudong-v1468086404.png" alt="7 chỗ" />
                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 7 chỗ</a></h4>
                                    <p className="description">Diện mạo thanh lịch với kết cấu khung gầm cao ráo, sở hữu khối động cơ Turbo diesel khoẻ khoắn, trang bị đầy đủ các tính năng an toàn hiện đại cùng khả năng di chuyển linh hoạt trên nhiều địa hình.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src="img/xe-ford-transit-16-cho-lap-dinh-vi.jpg" alt="16 chỗ" />

                                    </div>
                                    <h4 className="title"><a href="#h01">Xe 16 chỗ</a></h4>
                                    <p className="description">Ford Transit mới mạnh mẽ và sang trọng hơn, nhiều tính năng và trang thiết bị cao cấp đảm bảo khả năng vận hành ổn định, an toàn, tiết kiệm nhiên liệu và sinh lợi hiệu quả. Xe với 16 chỗ ngồi với kích thước rộng rãi, trang thiết bị tốt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="clients" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Đối tác của chúng tôi</h2>
                            <p>Dưới đây là những đối tác đã từng là khách hàng của chúng tôi. Họ đã tin tưởng và sử dụng dịch vụ của chúng tôi, chính sự phục vụ tận tình của chúng tôi đã thúc đẩy và phát triển quan hệ giữa hai bên.
                            Hiện tại, TaxiHome đã có các đối tác ở Úc, Nhật Bản, và Đức trên những lĩnh vực khác nhau. Bạn có thể xây dựng quan hệ đối tác với TaxiHome qua các hình thức như phân phối sản phẩm, hợp tác thiết kế hoặc hỗ trợ kinh doanh.</p>
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
                                <h3>Jame Beck</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Hôm trước mình có sử dụng dịch vụ của các bạn và cảm thấy rất vui vì tính trung thực của lái xe. Mình để quen laptop và kính mát của mình trên xe. Về đến nhà là 12h đêm nhưng lái xe cũng quay lại đưa cho mình. Cám ơn các bạn rất nhiều.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-2.jpg" className="testimonial-img" alt="01" />
                                <h3>Nguyễn Thùy Trâm</h3>
                                <h4>Nhân viên văn phòng</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi thường xuyên đi công tác bằng máy bay nên cũng hay sử dụng dịch vụ taxi từ Hà Nội lên Nội Bài và chiều ngược lại. Được biết công ty các bạn qua một người bạn đã sử dụng dịch vụ, tôi đã dùng thử và cảm thấy hài lòng với chất lượng taxi bên các bạn..
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-3.jpg" className="testimonial-img" alt="01" />
                                <h3>Jena Karlis</h3>
                                <h4>Kinh doanh</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Tôi và gia đình có thuê 1 xe 16 chỗ bên công ty để về quê. Lái xe rất lịch sự và nói chuyện cũng vui vẻ với khách, xe rất sạch sẽ. Gia đình chúng tôi cảm thấy rất hài lòng với chuyến đi. Xin chúc công ty ngày càng làm ăn phát đạt.
                      <img src="img/quote-sign-right.png" className="quote-sign-right" alt="01" />
                                </p>
                                <img src="img/testimonial-4.jpg" className="testimonial-img" alt="01" />
                                <h3>Matt Brandon</h3>
                                <h4>Kĩ sư</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img src="img/quote-sign-left.png" className="quote-sign-left" alt="01" />
                                    Mình là người đã đặt xe bên các bạn. Chiều hôm qua, mình có đặt xe để đón 1 người bạn nước ngoài từ sân bay Nội Bài về Hàng Bông. Người bạn của mình nói mọi thứ đều rất tốt, tuy nhiên, các bạn lưu ý lái xe không nên nghe điện thoại khi đang lái xe. Cám ơn các bạn.
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
                                <a className="cta-btn align-middle" href="tel:01252301020">HOTLINE: <br /> 01252.301.020</a>
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
                                    <address>TaxiHome Nội Bài</address>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="ion-ios-telephone-outline" />
                                    <h3>Hotline liên hệ</h3>
                                    <p><a href="tel:01252301020">01252.301.020</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="ion-ios-email-outline" />
                                    <h3>Email</h3>
                                    <p><a href="mailto:taxinoibaihome@gmail.com">taxinoibaihome@gmail.com</a></p>
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