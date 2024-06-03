import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer footer__container container">
                <h1 className="footer__title">Mehedi Hasan</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className='footer__link'>Home</a>
                    </li>
                    <li>
                        <a href="#projects" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#blogs" className='footer__link'>Blogs</a>
                    </li>
                    <li>
                        <a href="#contact" className='footer__link'>Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://github.com/mehedii-h03" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mehedi-hasan-37949b260/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/adryan_mehedi/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                </div>
                <span className="footer__copy">Copyright © 2023. All rights are reserved</span>
            </div>
        </footer>
    );
};

export default Footer;