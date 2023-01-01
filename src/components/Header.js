import { Button, Tooltip } from 'antd';

const Header = ({ account }) => {

    const text = <span>{account}</span>;

    return (
        <div className="wrap">
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button id="primary-nav-button" type="button">Menu</button>
                            <a href="index.html"><div className="logo">
                                {/* <img src="img/logo.png" alt="Venue Logo" /> */}
                            </div></a>
                            <nav id="primary-nav" className="dropdown cf">
                                <ul className="dropdown menu">
                                    <li className="active"><a href="#">Popular</a></li>
                                    <li><a href="#">All Charities</a></li>

                                    {account != null ? <Tooltip placement="bottom" color='blue' title={text}>
                                                             <li><a className="scrollTo" data-scrollto="contact">Welcome {account.substring(0, 5) + "..." + account.substring(account.length - 5, account.length)}</a></li>
                                                       </Tooltip>
                                        : <li><a className="scrollTo" data-scrollto="contact">No account detected</a></li>}
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