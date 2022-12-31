import ServiceCard from "./ServiceCard";

const OurServices = () => {
    return (
        <section className="our-services" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <span>Our Services</span>
                            <h2>Best Template Site</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="down-services">
                            <div className="row">
                                <div className="col-md-5 col-md-offset-1">
                                    <div className="left-content">
                                        <h4>In hac habitasse platea dictumst</h4>
                                        <p>Aenean hendrerit metus leo, quis viverra purus condimentum nec. Pellentesque a sem semper, lobortis mauris non, varius urna. Quisque sodales purus eu tellus fringilla.<br /><br />Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere tellus, id efficitur leo. In hac habitasse platea dictumst.</p>
                                        <div className="blue-button">
                                            <a href="#">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="accordions">
                                        <ul className="accordion">
                                            <li>
                                                <a>Ut in dapibus ipsum</a>
                                                <p>Nulla eget aliquet dui, vitae tincidunt nulla. Sed sagittis odio vitae auctor volutpat. In semper ex neque, ut hendrerit mauris rutrum eget. Integer consectetur neque eu enim dictum porta. Sed et risus ac sapien congue mattis.</p>
                                            </li>
                                            <li>
                                                <a>Vivamus ligula metus</a>
                                                <p>Integer vel augue arcu. Fusce ac turpis cursus, malesuada nulla quis, lobortis dui. Etiam blandit, erat efficitur rhoncus pellentesque, ligula turpis tempor dolor.</p>
                                            </li>
                                            <li>
                                                <a>Suspendisse dapibus</a>
                                                <p>Nullam nibh lacus, rhoncus sit amet feugiat vel, porttitor sit amet nibh. Pellentesque feugiat justo nec enim pretium, sed faucibus lacus aliquam. Sed ac interdum mauris.</p>
                                            </li>
                                        </ul> {/* / accordion */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;