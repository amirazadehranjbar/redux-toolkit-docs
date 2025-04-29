import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {navLink, sidebarStyles as navStyles, sidebarStyles} from "../style/twUtils.js";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex">
            {/* Toggle Button */}
            <button
                className={sidebarStyles.button}
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/*region Sidebar */}
            <div
                className={`${navStyles.container} ${
                    isOpen ? navStyles.open : navStyles.closed
                }`}
            >
                <nav className={navStyles.nav}>
                    {[
                        ['/', 'Introduction'],
                        ['/installation', 'Installation'],
                        ['/store-setup', 'Store Setup'],
                        ['/create-slice', 'Create Slice'],
                        ['/create-async-thunk', 'Create Async Thunk'],
                        ['/rtk-query', 'RTK Query'],
                    ].map(([to, label]) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => navLink(isActive)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
            {/*endregion Sidebar */}

        </div>
    );
};

export default Sidebar;
