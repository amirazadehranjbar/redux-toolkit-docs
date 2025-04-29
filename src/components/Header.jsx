import {headerStyles} from "../style/twUtils.js";

const Header = () => {
    return (
        <header className={headerStyles.container}>
            <div className={headerStyles.inner}>
                <h1 className={headerStyles.title}>Redux Toolkit Documentation</h1>
                <div>
                    {/* می‌تونی اینجا برای بخش‌های بعدی مثل ورود، زبان، یا آیکن‌ها طراحی اضافه کنی */}
                </div>
            </div>
        </header>
    );
};

export default Header;