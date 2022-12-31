const UselessContentTemp = () => {
    return (
        <>
            <section id="video-container">
                <div className="video-overlay" />
                <div className="video-content">
                    <div className="inner">
                        <span>Video Presentation</span>
                        <h2>Sed et risus ac sapien congue mattis.</h2>
                        <a href="http://youtube.com" target="_blank"><i className="fa fa-play" /></a>
                    </div>
                </div>
                <video autoPlay loop muted>
                    <source src="highway-loop.mp4" type="video/mp4" />
                </video>
            </section>
            <section className="pricing-tables">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <span>Pricing Tables</span>
                                <h2>Duis molestie ipsum id faucibus fermentum</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="table-item">
                                <div className="top-content">
                                    <h4>Starter Plan</h4>
                                    <h1>$25</h1>
                                    <span>/monthly</span>
                                </div>
                                <ul>
                                    <li><a href="#">100 Suspendisse dapibus</a></li>
                                    <li><a href="#">10x Paleo celiac enamel</a></li>
                                    <li><a href="#">Williamsburg organic post ironic</a></li>
                                    <li><a href="#">Helvetica pinterest yuccie</a></li>
                                    <li><a href="#">Plaid shabby chic godard</a></li>
                                </ul>
                                <div className="blue-button">
                                    <a href="#">Buy It Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="table-item">
                                <div className="top-content">
                                    <h4>Premium Plan</h4>
                                    <h1>$45</h1>
                                    <span>/monthly</span>
                                </div>
                                <ul>
                                    <li><a href="#">200 Suspendisse dapibus</a></li>
                                    <li><a href="#">20x Paleo celiac enamel</a></li>
                                    <li><a href="#">Williamsburg organic post ironic</a></li>
                                    <li><a href="#">Helvetica pinterest yuccie</a></li>
                                    <li><a href="#">Plaid shabby chic godard</a></li>
                                </ul>
                                <div className="blue-button">
                                    <a href="#">Buy It Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="table-item">
                                <div className="top-content">
                                    <h4>Advanced Plan</h4>
                                    <h1>$85</h1>
                                    <span>/monthly</span>
                                </div>
                                <ul>
                                    <li><a href="#">400 Suspendisse dapibus</a></li>
                                    <li><a href="#">40x Paleo celiac enamel</a></li>
                                    <li><a href="#">Williamsburg organic post ironic</a></li>
                                    <li><a href="#">Helvetica pinterest yuccie</a></li>
                                    <li><a href="#">Plaid shabby chic godard</a></li>
                                </ul>
                                <div className="blue-button">
                                    <a href="#">Buy It Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div id="map">
                    {/* How to change your own map point
                           1. Go to Google Maps
                           2. Click on your location point
                           3. Click "Share" and choose "Embed map" tab
                           4. Copy only URL and paste it within the src="" field below
                    */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" style={{ border: 0 }} allowFullScreen width="100%" height="500px" frameBorder={0} />
                </div>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="wrapper">
                            <div className="section-heading">
                                <span>Contact Us</span>
                                <h2>Vivamus nec vehicula felis</h2>
                            </div>
                            {/* Modal button */}
                            <button id="modBtn" className="modal-btn">Talk to us</button>
                        </div>
                        <div id="modal" className="modal">
                            {/* Modal Content */}
                            <div className="modal-content">
                                <div className="close fa fa-close" />
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="left-content">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="section-heading">
                                                        <span>Talk To Us</span>
                                                        <h2>Let's have a discussion</h2>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-12">
                                                    <fieldset>
                                                        <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" className="btn">Send Message</button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="right-content">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="content">
                                                        <div className="section-heading">
                                                            <span>More About Us</span>
                                                            <h2>Venue Company</h2>
                                                        </div>
                                                        <p>Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium. Suspendisse fermentum nec risus eu bibendum.</p>
                                                        <ul>
                                                            <li><span>Phone:</span><a href="#">010-050-0550</a></li>
                                                            <li><span>Email:</span><a href="#">hi@company.co</a></li>
                                                            <li><span>Address:</span><a href="#">company.co</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about-veno">
                                <div className="logo">
                                    <img src="img/footer_logo.png" alt="Venue Logo" />
                                </div>
                                <p>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst.</p>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                        <a href="#"><i className="fa fa-rss" /></a>
                                        <a href="#"><i className="fa fa-dribbble" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="useful-links">
                                <div className="footer-heading">
                                    <h4>Useful Links</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-stop" />Help FAQs</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />Register</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />Login</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />My Profile</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />How It Works?</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />More About Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-stop" />Our Clients</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />Partnerships</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />Blog Entries</a></li>
                                            <li><a href="#"><i className="fa fa-stop" />Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-info">
                                <div className="footer-heading">
                                    <h4>Contact Information</h4>
                                </div>
                                <p>Praesent iaculis gravida elementum. Proin fermentum neque facilisis semper pharetra. Sed vestibulum vehicula tincidunt.</p>
                                <ul>
                                    <li><span>Phone:</span><a href="#">010-050-0550</a></li>
                                    <li><span>Email:</span><a href="#">hi@company.co</a></li>
                                    <li><span>Address:</span><a href="#">company.co</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sub-footer">
                <p>Copyright © 2018 Company Name
                    - Design: <a rel="nofollow" href="http://www.templatemo.com">Template Mo</a></p>
            </div>
        </>
    )
}

export default UselessContentTemp;