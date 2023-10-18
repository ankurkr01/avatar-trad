import React from 'react';
import '../../style/homeStyle/footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="footer-widget-wrapper pt-80 pt-md-80 pt-sm-60 pb-70 pb-md-78 pb-sm-60">
          <div className="container-fluid">
            <div className="row mtm-44">
              {/* Start Single Widget Wrap */}    
              <div className="col-lg-3 col-md-6">
                <div className="single-widget-wrap">
                  <h3 className="widget-title">Head Office</h3>
                  <div className="widget-body">
                    <div className="about-text">
                      <address>
                        Behind Indian Oil Petrol Pump,<br />
                        Morbi-Halwad Road, <br />
                        State Highway No. 22,<br />
                        Nichimandal, Morbi, <br />
                        Gujarat - 363641<br />
                      </address>
                      <a href="https://goo.gl/maps/Hgk5XA3PV7Q6fEBB6" target="_blank" className='link'>
                        <span className="post-date"><i className="fa fa-map-marker"></i> Get Direction </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Widget Wrap */}
              <div className="col-lg-3 col-md-6">
                <div className="single-widget-wrap">
                  <h3 className="widget-title">Contact Us</h3>
                  <div className="widget-body">
                    <div className="latest-blog-widget">
                      <div className="single-blog-item">
                        <h3><a href="javascript:void(0)" className='title_link'>Email Address</a></h3>
                        <span className="post-date text-white"><i className="fa fa-envelope"></i> <a href="#" className='link'> exports@krash.in</a> </span> <br />
                        <span className="post-date text-white"><i className="fa fa-envelope"></i> <a href="#" className='link'> sales@krash.in  </a></span> <br />
                        <span className="post-date text-white"><i className="fa fa-envelope"></i> <a href="#" className='link'> purchase@krash.in </a>  </span> <br />
                        <span className="post-date text-white"><i className="fa fa-envelope"></i> <a href="#" className='link'> hr@krash.in </a>  </span>
                      </div>
                      <div className="single-blog-item">
                        <h3><a href="javascript:void(0)" className='title_link'>Contact Number</a></h3>
                        <span className="post-date"><i className="fa fa-phone"></i><a href="tel:+918141212000" className='link'> +91 98765 12000 </a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-widget-wrap">
                  <h3 className="widget-title">Links</h3>
                  <div className="widget-body">
                    <ul className="widget-list">
                      <li><a href="index" className='link'>Home</a></li>
                      <li><a href="company-profile"className='link'>Company Profile</a></li>
                      <li><a href="domestic-network"className='link'>Export Area</a></li>
                      <li><a href="product-inquiry"className='link'>Product Inquiry</a></li>
                      <li><a href="career"className='link'>Join Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-widget-wrap">
                  <h3 className="widget-title">Get In Touch</h3>
                  <div className="widget-body">
                    <div className="newsletter-widget-wrap">
                      <p>Enter your email and receive the latest Update from us.</p>
                      <div className="newsletter-form-wrap">
                        <form method="post" action="php/get-in-touch.php" className="">
                          <input type="email" name="email" placeholder="Enter Email Address" className='form-input w-75' required="" />
                          <button type="submit" className="btn btn-dark"><i className="fa fa-envelope"></i></button>
                        </form>

                        <div className="mailchimp-alerts text-center">
                          <div className="mailchimp-submitting"></div>
                          <div className="mailchimp-success"></div>
                          <div className="mailchimp-error"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Widget Area */}
        {/* Start Footer Bottom Area */}
        <div className="footer-bottom-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-7 order-last">
                <div className="footer-copyright-area mt-xs-10 text-center text-sm-start">
                  <p>
                    Simero Ceramics 2023. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-5 order-first order-sm-last">
                <div className="footer-social-icons nav justify-content-center justify-content-md-end">
                  <p className='powered_text'>
                    Powered by : <a href="#" target="_blank" className='powered_link'> Krash IT Services</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
