const Header = () => {
    return (
        <div className="wrap">
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <a href="index.html"><div className="logo">
                            <img src="img/logo.png" alt="Venue Logo" />
                        </div></a>
                        <nav id="primary-nav" className="dropdown cf">
                            <ul className="dropdown menu">
                                {/* <li className="active"><a href="#">Popular</a></li>
                                <li><a href="#">Most Visited</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Most Visited 1</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Sub Visited Menu 1</a></li>
                                                <li><a href="#">Sub Visited Two</a></li>
                                                <li><a href="#">Sub Visited Menu 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Most Visited 2</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Sub Visited Menu 4</a></li>
                                                <li><a href="#">Sub Visited Five</a></li>
                                                <li><a href="#">Sub Visited Menu 6</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Most Visited 3</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Sub Visited Menu 7</a></li>
                                                <li><a href="#">Sub Visited #8</a></li>
                                                <li><a href="#">Sub Visited Menu 9</a></li>
                                                <li><a href="#">Sub Visited #10</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li><a className="scrollTo" data-scrollto="contact" href="#">Contact Us</a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
};

export default Header;