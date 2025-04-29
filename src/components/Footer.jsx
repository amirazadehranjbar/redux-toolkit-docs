import React from 'react';
import { Github } from 'lucide-react';
import { footerStyles } from '../style/twUtils.js';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.inner}>
                {/* کپی‌رایت */}
                <p className={footerStyles.copy}>
                    © 2025 Redux Toolkit Documentation
                </p>

                {/* لینک‌ها */}
                <div className={footerStyles.links}>
                    <Link to="/about" className={footerStyles.link}>About Us</Link>
                    <Link to="/contact" className={footerStyles.link}>Contact Us</Link>
                </div>

                {/* آیکون‌ها */}
                <div className={footerStyles.icons}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={footerStyles.iconLink}>
                        <Github size={20} />
                    </a>
                    {/* اگر بعداً خواستی شبکه‌های اجتماعی دیگه هم اضافه می‌کنیم */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
