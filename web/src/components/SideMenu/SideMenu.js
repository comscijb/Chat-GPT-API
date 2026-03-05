import react from 'react';
import './SideMenu.css';

export const SideMenu = () => {
    return (
        <aside className='side-menu'>
            <div className='side-menu-button'>
                <span>+</span>
                Novo Chat
            </div>
        </aside>
    );
}