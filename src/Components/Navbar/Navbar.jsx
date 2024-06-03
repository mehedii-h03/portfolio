import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, showMenu] = useState(false)
    return (
        <header className='header'>
            <nav className="nav container">
                <Link to="/" className="nav__logo">&lt;Mehedi/&gt;</Link>
                <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#blogs" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Blogs
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!menu)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!menu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;