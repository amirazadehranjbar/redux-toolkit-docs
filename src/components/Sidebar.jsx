// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink }         from 'react-router-dom';
import { Menu, X }         from 'lucide-react';
import { navLink, sidebarStyles } from "../style/twUtils.js";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const mainRoutes = [
        ['/', 'Introduction'],
        ['/getting-started', 'Getting Started'],
        ['/installation', 'Installation'],
        ['/store-setup', 'Store Setup'],
        ['/create-slice', 'Create Slice'],
        ['/create-async-thunk', 'Create Async Thunk'],
        ['/rtk-query', 'RTK Query'],
        ['/best-practices', 'Best Practices'],
    ];

    const exampleRoutes = [
        ['/examples/example1', 'Example 1: Counter'],
        ['/examples/example2', 'Example 2: Todo List'],
        // در آینده
        // ['/examples/example2', 'Example 2: Todo App'],
    ];

    return (
        <div className="relative flex">
            <button className={sidebarStyles.button} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>

            <div className={`${sidebarStyles.container} ${isOpen ? sidebarStyles.open : sidebarStyles.closed}`}>
                <nav className={sidebarStyles.nav}>
                    {/*region Main Docs */}
                    {mainRoutes.map(([to, label]) => (
                        <NavLink key={to} to={to} className={({ isActive }) => navLink(isActive)}>
                            {label}
                        </NavLink>
                    ))}
                    {/*endregion*/}

                    {/*region Real Examples Group Title */}
                    <div className="text-sm text-gray-400 mt-6 mb-1 pl-1 select-none">
                        real examples
                    </div>

                    {/*region Real Examples Links */}
                    {exampleRoutes.map(([to, label]) => (
                        <NavLink key={to} to={to} className={({ isActive }) => navLink(isActive)}>
                            {label}
                        </NavLink>
                    ))}
                    {/*endregion*/}
                </nav>

            </div>
        </div>
    );
};

export default Sidebar;
