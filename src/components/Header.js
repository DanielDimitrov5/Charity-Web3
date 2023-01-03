import { useEffect, useState } from 'react';
import { Button, Tooltip } from 'antd';

const Header = ({ account }) => {

    const currentAccount = <span>{account}</span>;

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (account) {

            const loggedUser = (
                <Tooltip placement="bottom" color='blue' title={currentAccount}>
                    <li><a className="scrollTo" data-scrollto="contact">Welcome {account.substring(0, 5) + "..." + account.substring(account.length - 5, account.length)}</a></li>
                </Tooltip>
            )
            setUser(loggedUser);
        }
        else {
            const guestUser = (
                <Tooltip placement="bottom" color='blue' title="Connect with your ethereum wallet">
                    <li><a className="scrollTo" data-scrollto="contact">No account detected</a></li>
                </Tooltip>
            )

            setUser(guestUser);
        }
    }, [account]);



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
                                    <li className="active"><a>Popular</a></li>
                                    <li><a>All Charities</a></li>
                                    {user}
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