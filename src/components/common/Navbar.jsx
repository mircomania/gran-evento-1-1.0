import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo.png';

import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* LOGO */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn">
                        <img src={LogoNavbar} alt="Logotipo de tu Gran Evento en la barra de navegación" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                {!isMobile && (
                    <ul className="menu-nav light-text">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    {...(item.dataLink && { 'data-link': item.dataLink })}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {/* BURGERMENU */}

            {isMobile && <BurgerMenu />}
        </header>
    );
};
